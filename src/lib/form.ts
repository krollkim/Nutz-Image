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

export async function submitForm(data: FormData): Promise<SubmitResult> {
  // TODO: Implement Google Sheets submission
  // This will integrate with Google Sheets API to store form submissions
  try {
    // Placeholder implementation
    console.log('Form submission:', data)
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to submit form' }
  }
}
