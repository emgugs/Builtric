import { NextResponse } from 'next/server'
import { createAirtableRecord } from '@/lib/airtable'

const CONSTRUCTION_WORK = ['Residential', 'Commercial', 'Industrial', 'Infrastructre', 'Mixed'] as const
const COUNT_OPTIONS = ['1-5', '6-20', '21-50', '50+'] as const
const PROJECT_SIZES = ['Under $100k', '$100k-$500k', '$500k-$2M', '$2M+'] as const
const MOBILE_APP = ['Yes', 'No', 'Nice to have'] as const
const INTEGRATIONS = ['Accounting systems', 'BIM', 'ERP', 'Cloud storage', 'Other'] as const
const START_TIMELINES = ['Immediately', '1-3 months', '3-6 months', 'Just exploring'] as const

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

type QuotePayload = {
  constructionWork?: string
  projectsPerYear?: string
  projectSize?: string
  teamMembers?: string
  mobileApp?: string
  integrations?: string
  startTimeline?: string
  fullName?: string
  companyName?: string
  email?: string
  countryCode?: string
  phone?: string
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isOneOf<T extends string>(value: string, options: readonly T[]): value is T {
  return options.includes(value as T)
}

function validatePayload(body: QuotePayload) {
  if (!isNonEmptyString(body.constructionWork) || !isOneOf(body.constructionWork, CONSTRUCTION_WORK)) {
    return 'Construction work type is required.'
  }

  if (!isNonEmptyString(body.projectsPerYear) || !isOneOf(body.projectsPerYear, COUNT_OPTIONS)) {
    return 'Projects per year is required.'
  }

  if (!isNonEmptyString(body.projectSize) || !isOneOf(body.projectSize, PROJECT_SIZES)) {
    return 'Project size is required.'
  }

  if (!isNonEmptyString(body.teamMembers) || !isOneOf(body.teamMembers, COUNT_OPTIONS)) {
    return 'Team members is required.'
  }

  if (!isNonEmptyString(body.mobileApp) || !isOneOf(body.mobileApp, MOBILE_APP)) {
    return 'Mobile app support selection is required.'
  }

  if (!isNonEmptyString(body.integrations) || !isOneOf(body.integrations, INTEGRATIONS)) {
    return 'Integrations selection is required.'
  }

  if (!isNonEmptyString(body.startTimeline) || !isOneOf(body.startTimeline, START_TIMELINES)) {
    return 'Start timeline is required.'
  }

  if (!isNonEmptyString(body.fullName)) {
    return 'Full name is required.'
  }

  if (!isNonEmptyString(body.companyName)) {
    return 'Company name is required.'
  }

  if (!isNonEmptyString(body.email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return 'A valid email address is required.'
  }

  return null
}

export async function POST(request: Request) {
  try {
    const quoteTableId = process.env.AIRTABLE_QUOTE_TABLE_ID

    if (!quoteTableId) {
      throw new Error('Airtable quote table is not configured.')
    }

    const body = (await request.json()) as QuotePayload
    const validationError = validatePayload(body)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const dialCode = body.countryCode ? COUNTRY_DIAL_CODES[body.countryCode] : undefined
    const fullPhone =
      body.phone && dialCode ? `${dialCode} ${body.phone.trim()}` : body.phone?.trim()

    await createAirtableRecord(
      {
        'Full Name': body.fullName!.trim(),
        'Construction Work': body.constructionWork,
        'Projects Per Year': body.projectsPerYear,
        'Project Size': body.projectSize,
        'Team Members': body.teamMembers,
        'Mobile App Support': body.mobileApp,
        Integrations: body.integrations,
        'Start Timeline': body.startTimeline,
        'Company Name': body.companyName!.trim(),
        Email: body.email!.trim(),
        Phone: fullPhone,
        'Country Code': body.countryCode,
      },
      quoteTableId,
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Custom quote form submission failed:', error)
    return NextResponse.json(
      { error: 'Unable to submit your request right now. Please try again later.' },
      { status: 500 },
    )
  }
}
