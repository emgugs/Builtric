const AIRTABLE_API_URL = 'https://api.airtable.com/v0'

type AirtableRecordFields = Record<string, string | undefined>

export async function createAirtableRecord(
  fields: AirtableRecordFields,
  tableId?: string,
) {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const resolvedTableId = tableId ?? process.env.AIRTABLE_TABLE_ID

  if (!apiKey || !baseId || !resolvedTableId) {
    throw new Error('Airtable is not configured. Missing API key, base ID, or table ID.')
  }

  const cleanedFields = Object.fromEntries(
    Object.entries(fields).filter(([, value]) => value !== undefined && value !== ''),
  )

  const response = await fetch(`${AIRTABLE_API_URL}/${baseId}/${resolvedTableId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [{ fields: cleanedFields }],
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Airtable API error (${response.status}): ${errorBody}`)
  }

  return response.json()
}
