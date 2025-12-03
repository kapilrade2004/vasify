// // File: app/api/send-email/route.ts
// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, phone, company, message, service } = body;

//     // Validate required fields
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Send email to your business email
//     const { data, error } = await resend.emails.send({
//       from: 'VasifyTech Contact <onboarding@resend.dev>', // Change after domain verification
//       to: ['Sushil@vasifytech.com', 'sudhanshu@vasifytech.com'], // Your emails
//       replyTo: email, // User's email for easy reply
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <style>
//               body {
//                 font-family: Arial, sans-serif;
//                 line-height: 1.6;
//                 color: #333;
//                 max-width: 600px;
//                 margin: 0 auto;
//                 padding: 20px;
//               }
//               .header {
//                 background: linear-gradient(135deg, #10b981 0%, #059669 100%);
//                 color: white;
//                 padding: 30px;
//                 border-radius: 10px 10px 0 0;
//                 text-align: center;
//               }
//               .content {
//                 background: #f9fafb;
//                 padding: 30px;
//                 border: 1px solid #e5e7eb;
//                 border-top: none;
//               }
//               .field {
//                 margin-bottom: 20px;
//                 padding: 15px;
//                 background: white;
//                 border-radius: 8px;
//                 border-left: 4px solid #10b981;
//               }
//               .label {
//                 font-weight: bold;
//                 color: #059669;
//                 font-size: 12px;
//                 text-transform: uppercase;
//                 margin-bottom: 5px;
//               }
//               .value {
//                 color: #1f2937;
//                 font-size: 16px;
//               }
//               .message-box {
//                 background: white;
//                 padding: 20px;
//                 border-radius: 8px;
//                 border: 1px solid #e5e7eb;
//                 margin-top: 10px;
//               }
//               .footer {
//                 text-align: center;
//                 padding: 20px;
//                 color: #6b7280;
//                 font-size: 14px;
//                 border-radius: 0 0 10px 10px;
//                 background: #f9fafb;
//                 border: 1px solid #e5e7eb;
//                 border-top: none;
//               }
//               .button {
//                 display: inline-block;
//                 padding: 12px 24px;
//                 background: #10b981;
//                 color: white;
//                 text-decoration: none;
//                 border-radius: 8px;
//                 margin-top: 20px;
//                 font-weight: bold;
//               }
//             </style>
//           </head>
//           <body>
//             <div class="header">
//               <h1 style="margin: 0; font-size: 28px;">🎉 New Contact Form Submission</h1>
//               <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is interested in VasifyTech services!</p>
//             </div>
            
//             <div class="content">
//               <div class="field">
//                 <div class="label">👤 Name</div>
//                 <div class="value">${name}</div>
//               </div>
              
//               <div class="field">
//                 <div class="label">📧 Email</div>
//                 <div class="value"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></div>
//               </div>
              
//               ${phone ? `
//               <div class="field">
//                 <div class="label">📱 Phone</div>
//                 <div class="value"><a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></div>
//               </div>
//               ` : ''}
              
//               ${company ? `
//               <div class="field">
//                 <div class="label">🏢 Company</div>
//                 <div class="value">${company}</div>
//               </div>
//               ` : ''}
              
//               ${service ? `
//               <div class="field">
//                 <div class="label">🎯 Service Interested In</div>
//                 <div class="value">${service}</div>
//               </div>
//               ` : ''}
              
//               <div class="field">
//                 <div class="label">💬 Message</div>
//                 <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
//               </div>
              
//               <div style="text-align: center;">
//                 <a href="mailto:${email}" class="button">Reply to ${name}</a>
//               </div>
//             </div>
            
//             <div class="footer">
//               <p style="margin: 0;">This email was sent from your VasifyTech contact form</p>
//               <p style="margin: 5px 0 0 0; font-size: 12px;">Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
//             </div>
//           </body>
//         </html>
//       `,
//     });

//     if (error) {
//       console.error('Resend error:', error);
//       return NextResponse.json(
//         { error: 'Failed to send email' },
//         { status: 500 }
//       );
//     }

//     // Optional: Send confirmation email to user
//     await resend.emails.send({
//       from: 'VasifyTech <onboarding@resend.dev>',
//       to: [email],
//       subject: 'Thank you for contacting VasifyTech!',
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <style>
//               body {
//                 font-family: Arial, sans-serif;
//                 line-height: 1.6;
//                 color: #333;
//                 max-width: 600px;
//                 margin: 0 auto;
//                 padding: 20px;
//               }
//               .header {
//                 background: linear-gradient(135deg, #10b981 0%, #059669 100%);
//                 color: white;
//                 padding: 40px;
//                 border-radius: 10px;
//                 text-align: center;
//               }
//               .content {
//                 padding: 30px;
//                 background: #f9fafb;
//                 border-radius: 10px;
//                 margin-top: 20px;
//               }
//               .highlight {
//                 background: white;
//                 padding: 20px;
//                 border-radius: 8px;
//                 border-left: 4px solid #10b981;
//                 margin: 20px 0;
//               }
//             </style>
//           </head>
//           <body>
//             <div class="header">
//               <h1 style="margin: 0; font-size: 32px;">✅ Message Received!</h1>
//               <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 18px;">Thank you for reaching out to VasifyTech</p>
//             </div>
            
//             <div class="content">
//               <p>Hi ${name},</p>
              
//               <p>Thank you for contacting VasifyTech! We've received your message and our team will get back to you within 2 hours during business hours.</p>
              
//               <div class="highlight">
//                 <p style="margin: 0; font-weight: bold; color: #059669;">📞 Need immediate assistance?</p>
//                 <p style="margin: 10px 0 0 0;">Call us: <a href="tel:+919769754446" style="color: #10b981;">+91 9769754446</a><br>
//                 WhatsApp: <a href="https://wa.me/919769026133" style="color: #10b981;">+91 9769026133</a></p>
//               </div>
              
//               <p>In the meantime, feel free to explore our services or connect with us on social media.</p>
              
//               <p style="margin-top: 30px;">Best regards,<br>
//               <strong>Team VasifyTech</strong></p>
//             </div>
//           </body>
//         </html>
//       `,
//     });

//     return NextResponse.json(
//       { message: 'Email sent successfully', id: data?.id },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

//testing
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'VasifyTech Contact <onboarding@resend.dev>',
      to: ['pawarajay7.ap@gmail.com'],
      replyTo: email, 
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #10b981;
              }
              .label {
                font-weight: bold;
                color: #059669;
                font-size: 12px;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .value {
                color: #1f2937;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #6b7280;
                font-size: 14px;
                border-radius: 0 0 10px 10px;
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                background: #10b981;
                color: white;
                text-decoration: none;
                border-radius: 8px;
                margin-top: 20px;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🎉 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is interested in VasifyTech services!</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📱 Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}
              
              ${company ? `
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              ${service ? `
              <div class="field">
                <div class="label">🎯 Service Interested In</div>
                <div class="value">${service}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div style="text-align: center;">
                <a href="mailto:${email}" class="button">Reply to ${name}</a>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0;">This email was sent from your VasifyTech contact form</p>
              <p style="margin: 5px 0 0 0; font-size: 12px;">Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email to user
    await resend.emails.send({
      from: 'VasifyTech <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting VasifyTech!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 40px;
                border-radius: 10px;
                text-align: center;
              }
              .content {
                padding: 30px;
                background: #f9fafb;
                border-radius: 10px;
                margin-top: 20px;
              }
              .highlight {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #10b981;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 32px;">✅ Message Received!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 18px;">Thank you for reaching out to VasifyTech</p>
            </div>
            
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thank you for contacting VasifyTech! We've received your message and our team will get back to you within 2 hours during business hours.</p>
              
              <div class="highlight">
                <p style="margin: 0; font-weight: bold; color: #059669;">📞 Need immediate assistance?</p>
                <p style="margin: 10px 0 0 0;">Call us: <a href="tel:+919769754446" style="color: #10b981;">+91 9769754446</a><br>
                WhatsApp: <a href="https://wa.me/919769026133" style="color: #10b981;">+91 9769026133</a></p>
              </div>
              
              <p>In the meantime, feel free to explore our services or connect with us on social media.</p>
              
              <p style="margin-top: 30px;">Best regards,<br>
              <strong>Team VasifyTech</strong></p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}