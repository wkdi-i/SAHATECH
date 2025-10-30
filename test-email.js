// Simple test script to verify email functionality
const { sendContactEmail } = require('./src/api/sendEmail.js');
require('dotenv').config();

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '+212600808474',
  message: 'This is a test message to verify the email functionality is working correctly.'
};

async function testEmail() {
  console.log('Testing email functionality...');
  console.log('Test data:', testData);
  
  try {
    const result = await sendContactEmail(testData);
    console.log('Result:', result);
    
    if (result.success) {
      console.log('✅ Email test successful!');
    } else {
      console.log('❌ Email test failed:', result.error);
    }
  } catch (error) {
    console.error('❌ Email test error:', error);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testEmail();
}

module.exports = { testEmail };


