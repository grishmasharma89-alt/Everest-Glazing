/**
 * API / Form submission utilities
 */

const API_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '/api/contact'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

async function submitViaWeb3Forms(formData) {
  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: 'New Everest Double Glazing Contact Enquiry',
    from_name: formData.name,
    replyto: formData.email,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    suburb: formData.suburb || 'Not provided',
    service: formData.service || 'Not provided',
    message: formData.message,
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json()
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Web3Forms submission failed')
  }

  return result
}

async function submitViaFormspree(formData) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const result = await response.json()
  if (!response.ok) {
    throw new Error(result?.error || 'Formspree submission failed')
  }

  return result
}

export async function submitContactForm(formData) {
  try {
    // Priority: no-backend providers first
    if (WEB3FORMS_ACCESS_KEY) {
      return await submitViaWeb3Forms(formData)
    }

    if (FORMSPREE_ENDPOINT) {
      return await submitViaFormspree(formData)
    }

    if (API_ENDPOINT === '/api/contact') {
      throw new Error('No form provider configured. Set VITE_WEB3FORMS_ACCESS_KEY or VITE_FORMSPREE_ENDPOINT.')
    }

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
