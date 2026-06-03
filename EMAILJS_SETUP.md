# EmailJS Configuration Guide

## Getting Your EmailJS Credentials

### 1. Create EmailJS Account
- Go to: https://www.emailjs.com/
- Click "Sign Up"
- Verify your email

### 2. Create Email Service

**Steps:**
1. Go to Dashboard → "Email Services"
2. Click "Add New Service"
3. Select your email provider:
   - Gmail (Recommended for beginners)
   - Outlook
   - Yahoo
   - Custom SMTP
4. Connect your email account
5. Copy the **Service ID** (looks like: `service_abc123xyz`)

**Important for Gmail:**
- Enable "Less secure app access" OR
- Use App Password (recommended):
  - Go to https://myaccount.google.com/apppasswords
  - Create app password
  - Use that password in EmailJS

### 3. Create Email Template

**In EmailJS Dashboard:**
1. Go to "Email Templates"
2. Click "Create New Template"
3. Fill in:

| Field | Value |
|-------|-------|
| Template Name | `Contact Form Submission` |
| Subject | `New Contact Request from {{from_name}}` |
| Template Editor | See template below |

**Template Content:**
```
Hello!

You've received a new contact request:

---
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Business Type: {{business_type}}
Service Interested: {{service}}

Message:
{{message}}
---

Best regards,
Your Contalkt Solutions Website
```

4. Copy the **Template ID** (looks like: `template_xyz789abc`)

### 4. Get Public Key

1. Go to Dashboard → "Account"
2. Scroll to "Public Key"
3. Copy your **Public Key** (looks like: `1a2b3c4d5e6f7g8h9i0j`)

---

## Configuration Methods

### Method 1: Direct in Code (Simple)

**File**: `src/components/Contact.jsx`

Find around line 45:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Replace with your actual public key:
```javascript
emailjs.init('1a2b3c4d5e6f7g8h9i0j');
```

Find around line 52-54:
```javascript
const response = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
```

Replace with your credentials:
```javascript
const response = await emailjs.send(
  'service_abc123xyz',
  'template_xyz789abc',
```

✅ **Simple but not secure for public repositories**

---

### Method 2: Environment Variables (Recommended)

**Step 1**: Create `.env.local` file in project root:

```
VITE_EMAILJS_PUBLIC_KEY=1a2b3c4d5e6f7g8h9i0j
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_xyz789abc
VITE_CONTACT_EMAIL=your-email@gmail.com
```

**Step 2**: Update `src/components/Contact.jsx`:

Replace line 45:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

With:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

Replace lines 52-54:
```javascript
const response = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
```

With:
```javascript
const response = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
```

Replace the `to_email`:
```javascript
to_email: import.meta.env.VITE_CONTACT_EMAIL
```

✅ **More secure - keys hidden from source code**

**Don't forget**: Add `.env.local` to `.gitignore` (already done in this project)

---

### Method 3: Backend API (Most Secure)

Instead of calling EmailJS directly from frontend, create a backend endpoint:

**Example (Node.js/Express):**
```javascript
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, business, service, message } = req.body;

  const emailjs = require('emailjs-com');
  emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        phone,
        business_type: business,
        service,
        message,
        to_email: process.env.CONTACT_EMAIL
      }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

✅ **Most secure - keys never exposed to frontend**

---

## Testing Your Setup

### Test 1: Direct in EmailJS
1. Go to EmailJS → Email Templates
2. Find your template
3. Click "Test It"
4. Fill in sample data
5. Should receive email immediately

### Test 2: Via Website Form
1. Run `npm run dev`
2. Go to http://localhost:3000
3. Scroll to Contact section
4. Fill and submit form
5. Check your email

### Test 3: Browser Console
```javascript
// Open DevTools (F12) → Console
const emailjs = window.emailjs;

emailjs.send(
  'service_abc123xyz',
  'template_xyz789abc',
  {
    from_name: 'Test User',
    from_email: 'test@example.com',
    phone: '9876543210',
    business_type: 'test',
    service: 'website',
    message: 'Test message',
    to_email: 'your-email@gmail.com'
  }
).then(res => {
  console.log('✅ Email sent!', res);
}).catch(err => {
  console.error('❌ Error:', err);
});
```

---

## Troubleshooting

### Issue: "Service not found"
- ✓ Check Service ID is correct
- ✓ Check email service is activated in EmailJS
- ✓ Check account status is active

### Issue: "Template not found"
- ✓ Check Template ID is correct
- ✓ Check template is published
- ✓ Template name must match

### Issue: "Authentication failed"
- ✓ Check Public Key is correct
- ✓ For Gmail, verify app password setup
- ✓ Check account quota not exceeded

### Issue: "CORS error"
- ✓ This shouldn't happen with EmailJS
- ✓ Check browser console for full error
- ✓ Try from different network/device

### Issue: "Email not received"
- ✓ Check spam folder
- ✓ Verify "to_email" is correct
- ✓ Check EmailJS logs in dashboard

---

## EmailJS Account Limits

**Free Plan:**
- 200 emails/month
- Email services: ✓
- Email templates: ✓
- API access: ✓

**Premium Plans:**
- More emails/month
- Advanced features
- Priority support

For more details: https://www.emailjs.com/pricing

---

## Security Best Practices

1. ✅ Never commit API keys to Git
2. ✅ Use `.env.local` for local development
3. ✅ Use environment variables in production
4. ✅ Regenerate keys if compromised
5. ✅ Use backend for maximum security
6. ✅ Add rate limiting to prevent spam
7. ✅ Validate form data on backend

---

## Additional Resources

- EmailJS Dashboard: https://dashboard.emailjs.com
- EmailJS Docs: https://www.emailjs.com/docs
- Contact Form Best Practices: https://www.smashingmagazine.com/
- Email Templates Guide: https://www.emailjs.com/docs/service/

---

## Questions?

For more help, check:
1. README.md - Full documentation
2. QUICK_START.md - Quick setup
3. EmailJS Official Docs
4. Browser Console (F12) for error messages

**Happy emailing!** 📧✨
