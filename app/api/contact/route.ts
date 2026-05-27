import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields (name, email, message) are required." },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // Check if SMTP is configured
    const hasSmtpConfig = process.env.MAIL_HOST && process.env.MAIL_USER && process.env.MAIL_PASS

    if (!hasSmtpConfig) {
      // Log the submission when no SMTP config (for development)
      console.log("=== New Contact Form Submission (No SMTP configured) ===")
      console.log(`From: ${name} <${email}>`)
      console.log(`Message: ${message}`)
      console.log("======================================================")
      
      return NextResponse.json({
        success: true,
        message: "Message received! (Email delivery requires SMTP configuration. See the README for setup instructions.)",
      })
    }

    // Send email via SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT) || 587,
      secure: process.env.MAIL_SECURE === "true",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      replyTo: email,
      to: process.env.MAIL_TO || "virajkotian01@gmail.com",
      subject: `Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #7c3aed, #6366f1); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✉️ New Portfolio Message</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px; width: 100px; vertical-align: top;">Name:</td>
                <td style="padding: 10px 0; color: #333; font-size: 14px; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px; width: 100px; vertical-align: top;">Email:</td>
                <td style="padding: 10px 0; color: #333; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #7c3aed;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 0; color: #666; font-size: 14px; vertical-align: top;">Message:</td>
                <td style="padding: 15px 0; color: #333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #999; font-size: 12px; text-align: center;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    })

    console.log(`Email sent successfully from ${name} <${email}>`)
    return NextResponse.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later or email me directly at virajkotian01@gmail.com." },
      { status: 500 }
    )
  }
}