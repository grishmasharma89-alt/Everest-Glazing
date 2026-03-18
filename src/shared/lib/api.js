/**
 * API / Form submission utilities
 */

const API_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '/api/contact'

export async function submitContactForm(formData) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Form submission error:', error)
    throw error
  }
}

export async function submitQuoteRequest(formData) {
  // Same as contact form for now
  return submitContactForm(formData)
}
