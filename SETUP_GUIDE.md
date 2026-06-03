# Contalkt Solutions Website - Setup Guide

## 🎉 Website Complete!

Your professional website has been successfully updated with:
- ✅ Company branding (Orange, Blue, Green colors)
- ✅ Simplified, clean design
- ✅ Removed Service Packages section
- ✅ Professional contact form with email integration
- ✅ Company details and contact information
- ✅ Mobile-responsive layout

## 📋 Website Structure

The website includes the following sections:
1. **Header** - Navigation with company logo
2. **Hero** - Main landing section
3. **Services** - 4 core services offered
4. **Portfolio** - Sample projects
5. **Contact** - Contact form and information
6. **Footer** - Company details and links

## 🚀 Running the Website

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Install Dependencies
```bash
cd Contalkt-Solutions
npm install
```

### Development Server
```bash
npm run dev
```
The website will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 📧 Email Integration Setup

To enable the contact form, follow these steps:

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up for free
- Verify your email

### 2. Get Your Credentials
1. Go to **Dashboard** → **Account** → Copy your **Public Key**
2. Go to **Email Services** → Create a new service (or use existing)
   - Copy the **Service ID**
3. Go to **Email Templates** → Create a new template
   - Copy the **Template ID**

### 3. Update Contact Component
In `src/components/Contact.jsx`, find these lines (around line 34):

```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key

const response = await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
```

Replace the placeholders with your actual credentials:
```javascript
emailjs.init('abc123xyz'); // Your public key

const response = await emailjs.send(
  'service_abc123', // Your service ID
  'template_xyz789', // Your template ID
```

### 4. Test the Form
- Go to the Contact section of your website
- Fill in the form and submit
- You should receive an email at `akshitpatnala@gmail.com`

## 🎨 Customization

### Brand Colors
If you want to change colors, edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0066CC',      // Blue
  secondary: '#FF6B35',    // Orange
  accent: '#1ECC4B',       // Green
  dark: '#001F3F',         // Dark Blue
}
```

### Company Information
Update the following files to change company details:
- `src/components/Header.jsx` - Company name and tagline
- `src/components/Footer.jsx` - Contact details and address
- `src/components/Contact.jsx` - Email and phone numbers

### Add Your Logo
1. Create a logo image
2. Place it in `public` folder
3. Update Header component to use your actual logo image instead of the text "C"

## 📱 Responsive Design

The website is fully responsive:
- **Mobile** - Optimized for screens < 640px
- **Tablet** - Optimized for 640px to 1024px
- **Desktop** - Optimized for screens > 1024px

## 🔒 Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Option 3: GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings

## ✅ Checklist Before Launch

- [ ] Email form is working (test it)
- [ ] All phone numbers are updated
- [ ] Address is correct
- [ ] Social media links are updated (if needed)
- [ ] Website is tested on mobile devices
- [ ] SEO meta tags are added
- [ ] Domain is purchased and configured

## 📞 Support Files

- `EMAILJS_SETUP.md` - Detailed EmailJS setup guide
- `QUICK_START.md` - Quick start reference
- `DEPLOYMENT.md` - Deployment instructions

## 🎯 Next Steps

1. Set up EmailJS for contact form
2. Test the website locally
3. Deploy to your domain
4. Share with your team and clients!

---

**Your website is production-ready!** 🚀
