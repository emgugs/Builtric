import { NextResponse } from 'next/server'
import { createAirtableRecord } from '@/lib/airtable'

const REQUEST_TYPES = [
  'Demo Request',
  'General Information',
  'Sales Inquiry',
  'Technical Support',
  'Partnership',
  'Other',
] as const

const COMPANY_TYPES = [
  'Main Contractor',
  'Subcontractor',
  'Owner/Developer',
  'Government',
  'Other',
  'Project Manager',
  'Become a Reseller',
] as const

const PACKAGE_TYPES = ['Standard', 'Professional', 'Enterprise'] as const

const COUNTRY_DIAL_CODES: Record<string, string> = {
  US: '+1',
  GB: '+44',
  AE: '+971',
  SA: '+966',
  PK: '+92',
  IN: '+91',
  AU: '+61',
  CA: '+1',
}

type ContactPayload = {
  requestType?: string
  companyType?: string
  name?: string
  email?: string
  countryCode?: string
  phone?: string
  message?: string
  demoPackage?: string
  demoDate?: string
  demoTime?: string
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function validatePayload(body: ContactPayload) {
  if (!isNonEmptyString(body.requestType) || !REQUEST_TYPES.includes(body.requestType as (typeof REQUEST_TYPES)[number])) {
    return 'A valid request type is required.'
  }

  if (!isNonEmptyString(body.companyType) || !COMPANY_TYPES.includes(body.companyType as (typeof COMPANY_TYPES)[number])) {
    return 'A valid company type is required.'
  }

  if (!isNonEmptyString(body.name)) {
    return 'Name is required.'
  }

  if (!isNonEmptyString(body.email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return 'A valid email address is required.'
  }

  if (body.requestType !== 'Demo Request' && !isNonEmptyString(body.message)) {
    return 'Message is required.'
  }

  if (body.requestType === 'Demo Request') {
    if (!isNonEmptyString(body.demoPackage) || !PACKAGE_TYPES.includes(body.demoPackage as (typeof PACKAGE_TYPES)[number])) {
      return 'Demo package is required for demo requests.'
    }

    if (!isNonEmptyString(body.demoDate)) {
      return 'Preferred demo date is required.'
    }

    if (!isNonEmptyString(body.demoTime)) {
      return 'Preferred demo time is required.'
    }
  }

  return null
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const validationError = validatePayload(body)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const dialCode = body.countryCode ? COUNTRY_DIAL_CODES[body.countryCode] : undefined
    const fullPhone =
      body.phone && dialCode ? `${dialCode} ${body.phone.trim()}` : body.phone?.trim()

    await createAirtableRecord({
      Name: body.name!.trim(),
      'Request Type': body.requestType,
      'Company Type': body.companyType,
      Email: body.email!.trim(),
      Phone: fullPhone,
      'Country Code': body.countryCode,
      Message: body.message?.trim(),
      'Demo Package': body.requestType === 'Demo Request' ? body.demoPackage : undefined,
      'Demo Date': body.requestType === 'Demo Request' ? body.demoDate : undefined,
      'Demo Time': body.requestType === 'Demo Request' ? body.demoTime : undefined,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form submission failed:', error)
    return NextResponse.json(
      { error: 'Unable to submit your request right now. Please try again later.' },
      { status: 500 },
    )
  }
}
