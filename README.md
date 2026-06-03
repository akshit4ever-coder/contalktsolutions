# Contalkt Solutions - Digital Marketing & IT Agency Website

A modern, professional React + Tailwind CSS website for Contalkt Solutions, a full-service digital solutions agency. The website showcases services, packages, portfolio, and includes email integration for client inquiries.

## 🚀 Features

- **Responsive Design**: Mobile-first, fully responsive layout
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Showcase**: Detailed service offerings with pricing
- **Package Plans**: Three-tier pricing packages (Starter, Growth, Premium)
- **Portfolio Section**: Showcase of successful projects
- **Testimonials**: Client success stories and ratings
- **Contact Form**: Email integration for client inquiries
- **Performance Optimized**: Fast loading with Vite
- **SEO Ready**: Meta tags and semantic HTML

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation & Setup

### 1. Install Dependencies

```bash
cd Contalkt-Solutions
npm install
```

### 2. Configure Email Integration (EmailJS)

The website uses **EmailJS** for sending contact form emails. Here's how to set it up:

#### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email

#### Step 2: Create Email Service
1. Go to **Dashboard** → **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID** (format: `service_xxxxxxxxx`)

#### Step 3: Create Email Template
1. Go to **Dashboard** → **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Name: Contact Form Submission
Subject: New Contact Request from {{from_name}}

Template:
From: {{from_email}}
Phone: {{phone}}
Business Type: {{business_type}}
Service Interested: {{service}}

Message:
{{message}}
```

4. Copy your **Template ID** (format: `template_xxxxxxxxx`)

#### Step 4: Get API Keys
1. Go to **Dashboard** → **Account**
2. Copy your **Public Key** (format: `xxxxxxxxxxxxxxxxxxxx`)

#### Step 5: Update Configuration
Open `src/components/Contact.jsx` and replace:

```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // Line ~45
// Replace 'YOUR_PUBLIC_KEY' with your actual public key

const response = await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  {
    // ... rest of the code
  }
);
```

### 3. Update Contact Information

Edit `src/components/Contact.jsx` and `src/components/Footer.jsx` to add your:
- Phone number
- Email address
- Location
- Social media links

## 🚀 Running the Project

### Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000` with hot module replacement enabled.

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx              # Main app component
├── index.css            # Global styles with Tailwind
└── components/
    ├── Header.jsx       # Navigation header
    ├── Hero.jsx         # Hero section
    ├── Services.jsx     # Services showcase
    ├── Packages.jsx     # Pricing packages
    ├── Portfolio.jsx    # Project portfolio
    ├── Clients.jsx      # Testimonials
    ├── Contact.jsx      # Contact form with email
    └── Footer.jsx       # Footer section
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0066cc',      // Change primary blue
      secondary: '#00a8e8',    // Change secondary blue
      accent: '#ff6b35',       // Change accent orange
    }
  },
}
```

### Update Services

Edit `src/components/Services.jsx` and modify the `services` array with your offerings.

### Update Packages

Edit `src/components/Packages.jsx` and modify the `packages` array with your pricing and features.

### Add Portfolio Projects

Edit `src/components/Portfolio.jsx` and modify the `projects` array with your case studies.

### Update Testimonials

Edit `src/components/Clients.jsx` and modify the `testimonials` array with real client reviews.

## 📧 Email Integration Troubleshooting

### Issue: "Failed to send message"

**Solution 1**: Verify EmailJS credentials
- Check Public Key is correct
- Check Service ID is correct
- Check Template ID is correct
- Ensure your email service is activated

**Solution 2**: CORS Issue
- EmailJS should handle CORS automatically
- Make sure your EmailJS account allows your domain

**Solution 3**: Check Browser Console
- Open DevTools (F12)
- Check Console tab for specific error messages
- Look for EmailJS error details

### Test Email Send

Add this to your browser console to test:

```javascript
const emailjs = require('emailjs-com');
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  from_name: 'Test',
  from_email: 'test@example.com',
  phone: '9876543210',
  business_type: 'test',
  service: 'test',
  message: 'Test message',
  to_email: 'your-email@gmail.com'
}).then(res => console.log('Success:', res));
```

## 🔒 Environment Variables (Optional)

For enhanced security, you can use environment variables:

Create `.env.local`:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Then update `Contact.jsx` to use:

```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 SEO Optimization

- Meta tags in `index.html`
- Semantic HTML structure
- Fast loading with Vite
- Mobile-first design

### Enhance SEO:
1. Add more meta descriptions for each section
2. Implement Open Graph tags for social sharing
3. Add structured data (JSON-LD)
4. Create a sitemap.xml
5. Add robots.txt

## 📦 Dependencies

- **React 18**: UI library
- **Vite**: Fast build tool
- **Tailwind CSS**: Utility-first CSS
- **EmailJS**: Email service integration
- **Lucide React**: Beautiful icons

## 🌐 Deployment Options

### Netlify
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Connect your Git repo to Vercel
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 🤝 Support & Contribution

For questions or issues:
1. Check the troubleshooting section
2. Review EmailJS documentation
3. Check Tailwind CSS docs

## 📄 License

This project is ready for commercial use.

## 🎉 Next Steps

1. ✅ Customize all company information
2. ✅ Set up EmailJS for contact form
3. ✅ Add real portfolio projects
4. ✅ Update testimonials with real clients
5. ✅ Deploy to your hosting platform
6. ✅ Set up Google Analytics
7. ✅ Configure Google Business Profile
8. ✅ Start marketing your services!

---

**Ready to launch your digital presence? Start now!** 🚀
