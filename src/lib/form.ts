export interface FormData {
  name: string
  phone: string
  plan: string
  experience: string
  message: string
}

export interface SubmitResult {
  success: boolean
  error?: string
}

// Shared Google Apps Script endpoint (writes leads to a managed Google Sheet).
const GOOGLE_SHEETS_URL =
  'https://script.google.com/macros/s/AKfycbzjTFrHgEG01mmEsZgLy-LVrkUlrMOqdrHyUsG-mSOsXzZYXlicNJP7-ubRocYujSIY/exec'

export async function submitForm(data: FormData): Promise<SubmitResult> {
  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      // Apps Script returns no CORS headers — no-cors is required, but means the
      // response is opaque (unreadable). We treat a resolved fetch as success.
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'משפך': 'אתר תדמית', // funnel/source label → "משפך" column in the sheet
        name: data.name,
        phone: data.phone,
        plan: data.plan,
        'מסלול': data.plan, // hedge: also send under the Hebrew column name
        experience: data.experience,
        message: data.message,
        timestamp: new Date().toLocaleString('he-IL', {
          timeZone: 'Asia/Jerusalem',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      }),
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to submit form' }
  }
}
