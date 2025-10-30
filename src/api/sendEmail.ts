import nodemailer from 'nodemailer';

// Types for the contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'your-email@gmail.com',
      pass: process.env.SMTP_PASS || 'your-app-password',
    },
  });
};

// Validation function
const validateContactData = (data: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (data.phone && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(data.phone)) {
    errors.push('Please provide a valid phone number');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Main function to send email
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Validate input data
    const validation = validateContactData(formData);
    if (!validation.isValid) {
      return {
        success: false,
        message: 'Validation failed',
        error: validation.errors.join(', ')
      };
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: 'contact@sahatech.ma',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; font-size: 12px; color: #64748b;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>IP Address:</strong> ${process.env.CLIENT_IP || 'Unknown'}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        ${formData.phone ? `Phone: ${formData.phone}` : ''}
        
        Message:
        ${formData.message}
        
        Submitted: ${new Date().toLocaleString()}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return {
      success: true,
      message: 'Email sent successfully'
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      success: false,
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// API handler function for different environments
export const handleContactSubmission = async (request: Request): Promise<Response> => {
  try {
    // Handle CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ success: false, message: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse request body
    const formData: ContactFormData = await request.json();

    // Send email
    const result = await sendContactEmail(formData);

    return new Response(
      JSON.stringify(result),
      { 
        status: result.success ? 200 : 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('API handler error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );
  }
};

