import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Email to send to business
    const businessEmailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${body.message.replace(/\n/g, '<br>')}</p>
    `;

    // Email to send to customer (confirmation)
    const customerEmailContent = `
      <h2>Thank You for Contacting Youth Glow Studio!</h2>
      <p>Hi ${body.name},</p>
      <p>We've received your message and appreciate you reaching out. Our team will get back to you as soon as possible.</p>
      <h3>Your Message Details:</h3>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
      <p><strong>Your Message:</strong></p>
      <p>${body.message.replace(/\n/g, '<br>')}</p>
      <hr />
      <p>In the meantime, feel free to:</p>
      <ul>
        <li>Browse our services at <a href="${process.env.NEXT_PUBLIC_SITE_URL}/services">youthfulglowstudio.com/services</a></li>
        <li>Book directly using our online calendar</li>
        <li>Call us at (416) 577-6409</li>
      </ul>
      <p>Warm regards,<br/>The Youth Glow Studio Team</p>
    `;

    // Send email to business
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.BUSINESS_EMAIL || 'marcia@youthfulglowstudio.com',
      subject: `New Contact Form Submission from ${body.name}`,
      html: businessEmailContent,
      replyTo: body.email,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: body.email,
      subject: 'We Received Your Message - Youth Glow Studio',
      html: customerEmailContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully! We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
