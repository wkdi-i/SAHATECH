# Email Setup Instructions

This document explains how to set up the email functionality for the contact form.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Server Configuration
PORT=3001
NODE_ENV=development
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in `SMTP_PASS`

## Alternative Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Running the Application

### Development Mode
```bash
# Run both frontend and backend
npm run dev:full

# Or run separately:
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
npm run server
```

### Production Mode
```bash
# Build and start
npm start
```

## API Endpoints

- **POST** `/api/contact` - Submit contact form
  - Body: `{ name, email, phone?, message }`
  - Response: `{ success: boolean, message: string, error?: string }`

## Deployment

### Vercel/Netlify
1. Set environment variables in your hosting platform
2. The server.js file will handle both API routes and serving the React app

### Traditional Hosting
1. Build the React app: `npm run build`
2. Start the server: `npm run server`
3. Ensure your hosting provider supports Node.js

## Troubleshooting

### Common Issues

1. **Authentication Failed**
   - Check your email credentials
   - Ensure 2FA is enabled and app password is used for Gmail

2. **Connection Timeout**
   - Verify SMTP host and port
   - Check firewall settings

3. **Form Not Submitting**
   - Check browser console for errors
   - Verify API endpoint is accessible
   - Ensure CORS is properly configured

### Testing Email Functionality

You can test the email functionality by:
1. Filling out the contact form
2. Checking the server logs for email sending status
3. Verifying emails are received at `contact@sahatech.ma`

## Security Notes

- Never commit `.env` files to version control
- Use environment variables for all sensitive data
- Consider implementing rate limiting for production use
- Validate all form inputs on both client and server side


