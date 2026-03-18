import { Toaster } from 'sonner'

/**
 * ToastProvider — wraps sonner's Toaster with app-consistent styling.
 * Placed once in AppLayout. Usage: toast.success('Sent!') / toast.error('Failed')
 */
export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        className: 'font-sans text-sm',
        duration: 4000,
      }}
      richColors
      closeButton
    />
  )
}
