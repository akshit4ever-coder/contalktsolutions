# 🚀 Contalkt Solutions Website - Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (2 mins)
```bash
cd Contalkt-Solutions
npm install
```

### Step 2: Set Up Email Integration (3 mins)

1. **Sign up at EmailJS**: https://www.emailjs.com/
2. **Get your credentials**:
   - Public Key: https://dashboard.emailjs.com/account
   - Service ID: Create at Email Services
   - Template ID: Create at Email Templates

3. **Open `src/components/Contact.jsx`** and find line ~45:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```
   Replace `YOUR_PUBLIC_KEY` with your actual key

4. **Replace line ~52-54**:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',    // Your service ID
     'YOUR_TEMPLATE_ID',   // Your template ID
   ```

### Step 3: Run the Site
```bash
npm run dev
```

Your site will open at **http://localhost:3000** ✨

---

## 📧 Email Template for EmailJS

When creating your email template in EmailJS dashboard, use this:

**Template Name**: Contact Form Submission

**Subject**: 
```
New Contact Request from {{from_name}}
```

**Body**:
```
Hello,

You have received a new contact request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Business Type: {{business_type}}
Service Interested: {{service}}

Message:
{{message}}

Best regards,
Contalkt Solutions Contact Form
```

---

## 🎨 Customize Your Site

### Add Your Details
- **Logo & Company Name**: `src/components/Header.jsx` (line 13-18)
- **Phone Number**: `src/components/Contact.jsx` (line 115)
- **Email**: `src/components/Contact.jsx` (line 123)
- **Address**: `src/components/Contact.jsx` (line 131)

### Update Services
- Edit `src/components/Services.jsx` → Modify `services` array

### Change Packages & Pricing
- Edit `src/components/Packages.jsx` → Modify `packages` array

### Add Your Portfolio
- Edit `src/components/Portfolio.jsx` → Modify `projects` array

### Update Testimonials
- Edit `src/components/Clients.jsx` → Modify `testimonials` array

---

## 🌐 Build & Deploy

### Build for Production
```bash
npm run build
```
Creates optimized `dist` folder

### Deploy Options

**Netlify** (Easiest)
- Go to https://netlify.com
- Drag & drop your `dist` folder
- Done! 🎉

**Vercel**
- Connect your GitHub repo
- Auto-deploys on push

**GitHub Pages**
- Push `dist` to gh-pages branch
- Enable in repository settings

---

## 🆘 Common Issues & Fixes

### Email Not Sending?
1. Check Public Key in `Contact.jsx`
2. Verify Service & Template IDs
3. Check browser console (F12) for errors
4. Ensure EmailJS service is activated

### Site Not Running?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tailwind Not Applying?
- Make sure you ran `npm install`
- Vite auto-compiles Tailwind CSS

---

## 📱 Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Fast with Vite build tool
✅ Beautiful animations & transitions
✅ Professional color scheme
✅ Email contact form integration
✅ SEO optimized
✅ Service showcase with pricing
✅ Portfolio section
✅ Client testimonials
✅ Mobile menu navigation

---

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **EmailJS Docs**: https://www.emailjs.com/docs
- **Lucide Icons**: https://lucide.dev

---

## 🎯 Next Steps After Setup

1. ✅ Customize all company information
2. ✅ Test contact form email
3. ✅ Add real portfolio projects
4. ✅ Replace testimonials with real clients
5. ✅ Deploy to production
6. ✅ Set up Google Analytics
7. ✅ Start marketing!

---

## 💡 Pro Tips

- Use high-quality images in portfolio
- Get real client testimonials (with permission)
- Regularly update case studies
- Keep pricing competitive
- Add FAQ section for better SEO
- Use Google My Business for local SEO

---

**Questions? Check the full README.md for more details!** 📖
