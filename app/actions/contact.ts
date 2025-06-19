"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const service = formData.get("service") as string
    const budget = formData.get("budget") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service || !message) {
      return { success: false, error: "Missing required fields" }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || "bestfriendbff0406@gmail.com",
        pass: process.env.EMAIL_PASSWORD || "wakz gnrn maeh kjkw",
      },
    })

    // Admin email addresses - FIXED: Only send to these specific emails
    const adminEmails = ["Sushil@vasifytech.com", "sudhanshu@vasifytech.com"]

    // Email content for admins
    const adminEmailSubject = `🚀 New Contact Form Submission from ${firstName} ${lastName}`

    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #10b981; }
          .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 4px solid #10b981; }
          .message-box { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 10px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎯 New Lead from VasifyTech Website!</h2>
            <p>A potential client has submitted a contact form</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Full Name:</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email Address:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">📱 Phone Number:</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            
            <div class="field">
              <div class="label">🏢 Company:</div>
              <div class="value">${company || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">🎯 Service Interested:</div>
              <div class="value">${getServiceName(service)}</div>
            </div>
            
            <div class="field">
              <div class="label">💰 Budget Range:</div>
              <div class="value">${getBudgetRange(budget)}</div>
            </div>
            
            <div class="field">
              <div class="label">💬 Project Details:</div>
              <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>
            
            <div class="field">
              <div class="label">⏰ Submitted:</div>
              <div class="value">${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the VasifyTech contact form</p>
            <p>Please respond within 2 hours for best customer experience</p>
          </div>
        </div>
      </body>
      </html>
    `

    const adminEmailText = `
      New Contact Form Submission - VasifyTech
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Company: ${company || "Not provided"}
      Service Interested: ${getServiceName(service)}
      Budget Range: ${getBudgetRange(budget)}
      
      Project Details:
      ${message}
      
      Submitted: ${new Date().toLocaleString()}
      
      Please respond within 2 hours for best customer experience.
    `

    console.log(`📧 Sending admin emails to: ${adminEmails.join(", ")}`)

    // Send email to admin addresses only - FIXED: Send to each admin separately
    for (const adminEmail of adminEmails) {
      await transporter.sendMail({
        from: `"VasifyTech Contact Form" <${process.env.EMAIL_USER || "bestfriendbff0406@gmail.com"}>`,
        to: adminEmail,
        subject: adminEmailSubject,
        text: adminEmailText,
        html: adminEmailHtml,
        replyTo: email, // Allow admins to reply directly to the customer
      })
      console.log(`✅ Admin email sent to: ${adminEmail}`)
    }

    console.log(`📧 Sending confirmation email to customer: ${email}`)

    // Send confirmation email to customer - SEPARATE EMAIL
    await transporter.sendMail({
      from: `"VasifyTech Team" <${process.env.EMAIL_USER || "bestfriendbff0406@gmail.com"}>`,
      to: email, // Only to the customer
      subject: "Thank you for contacting VasifyTech! We'll be in touch soon 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; }
            .button { display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Thank You, ${firstName}!</h1>
              <p>We've received your inquiry and we're excited to help!</p>
            </div>
            <div class="content">
              <p>Hi ${firstName},</p>
              
              <p>Thank you for reaching out to VasifyTech! We've received your inquiry about <strong>${getServiceName(service)}</strong> and our team is already reviewing your requirements.</p>
              
              <div class="highlight">
                <h3>⚡ What happens next?</h3>
                <ul>
                  <li><strong>Within 2 hours:</strong> One of our experts will contact you</li>
                  <li><strong>Free consultation:</strong> We'll discuss your project in detail</li>
                  <li><strong>Custom proposal:</strong> Tailored solution for your business</li>
                  <li><strong>Quick start:</strong> Begin your project within 24-48 hours</li>
                </ul>
              </div>
              
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>📱 <strong>WhatsApp us:</strong> <a href="https://wa.me/919769754446">+91 97697 54446</a></li>
                <li>📞 <strong>Call us:</strong> <a href="tel:+919769754446">+91 9769754446</a></li>
                <li>🌐 <strong>Visit our website:</strong> <a href="https://vasifytech.com">vasifytech.com</a></li>
              </ul>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://wa.me/919769754446" class="button">💬 Chat on WhatsApp</a>
              </div>
              
              <p>We're looking forward to helping you transform your business!</p>
              
              <p>Best regards,<br>
              <strong>The VasifyTech Team</strong><br>
              🚀 Your Digital Transformation Partners</p>
            </div>
            <div class="footer">
              <p>VasifyTech - Engage Customers on WhatsApp, Effortlessly</p>
              <p>This is an automated confirmation. Please don't reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Thank you for contacting VasifyTech!
        
        Hi ${firstName},
        
        We've received your inquiry about ${getServiceName(service)} and our team will contact you within 2 hours.
        
        What happens next:
        - Within 2 hours: One of our experts will contact you
        - Free consultation: We'll discuss your project in detail  
        - Custom proposal: Tailored solution for your business
        - Quick start: Begin your project within 24-48 hours
        
        Contact us anytime:
        WhatsApp: +91 9769754446
        Phone: +91 9769754446
        Website: vasifytech.com
        
        Best regards,
        The VasifyTech Team
      `,
    })

    console.log(`✅ Confirmation email sent to customer: ${email}`)

    return { success: true }
  } catch (error) {
    console.error("❌ Error sending emails:", error)
    return { success: false, error: "Failed to send message. Please try again." }
  }
}

// Helper function to get service name
function getServiceName(service: string): string {
  const serviceMap: { [key: string]: string } = {
    whatsapp: "WhatsApp Automation",
    website: "Website Development",
    mobile: "Mobile App Development",
    crm: "CRM Solutions",
    erp: "ERP Systems",
    saas: "SaaS Development",
    software: "Custom Software Development",
    marketing: "Digital Marketing",
    ecommerce: "E-commerce Development",
    uiux: "UI/UX Design",
    cybersecurity: "Cybersecurity Solutions",
    cloud: "Cloud Solutions",
    all: "All Services",
  }
  return serviceMap[service] || service
}

// Helper function to get budget range
function getBudgetRange(budget: string): string {
  const budgetMap: { [key: string]: string } = {
    "under-1k": "Under $1,000",
    "1k-5k": "$1,000 - $5,000",
    "5k-10k": "$5,000 - $10,000",
    "10k-25k": "$10,000 - $25,000",
    "25k-plus": "$25,000+",
  }
  return budgetMap[budget] || budget || "Not specified"
}
