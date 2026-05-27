// Email configuration for the contact form
// To use your Gmail account:
// 1. Enable 2-Factor Authentication on your Google account
// 2. Generate an App Password at: https://myaccount.google.com/apppasswords
// 3. Set these environment variables in your .env.local file:
//    MAIL_HOST=smtp.gmail.com
//    MAIL_PORT=587
//    MAIL_USER=your.email@gmail.com
//    MAIL_PASS=your-16-digit-app-password
//    MAIL_TO=virajkotian01@gmail.com

export type ContactFormData = {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, message: "Network error. Please try again later." }
  }
}