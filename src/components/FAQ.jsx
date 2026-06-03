import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing is flexible based on your needs. Services typically start from ₹5,000/month for maintenance to ₹5+ lakh for custom app development. Contact us for a customized quote.'
    },
    {
      question: 'What is the timeline for a website or app?',
      answer: 'A standard website takes 2-4 weeks. Mobile apps typically take 6-12 weeks depending on complexity. We provide a detailed timeline during the consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All our projects include ongoing support. We offer maintenance packages, updates, security patches, and 24/7 assistance for all clients.'
    },
    {
      question: 'Can you integrate with existing platforms?',
      answer: 'Absolutely! We can integrate with Swiggy, Zomato, Shopify, payment gateways, CRM systems, and many other platforms based on your requirements.'
    },
    {
      question: 'What if I already have a website?',
      answer: 'We can audit your existing website, optimize it, add new features, improve performance, or completely redesign it. We also offer maintenance services.'
    },
    {
      question: 'How do you handle data security?',
      answer: 'We follow industry best practices including SSL encryption, secure payment processing, regular backups, and GDPR compliance. Your data is safe with us.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Yes! We offer SEO optimization, Google Ads management, social media advertising, and content marketing to help you reach your target audience.'
    },
    {
      question: 'What if I need revisions?',
      answer: "We include revision rounds in all our projects. Once development is complete, we provide 2-3 revision rounds to ensure you're 100% satisfied."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <button
              onClick={() => window.location.hash = 'home'}
              className="flex items-center space-x-2 text-[#0066CC] hover:text-[#0052A3] font-semibold mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>

            <div className="text-center mb-16">
              <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#0066CC] transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="text-[#0066CC]" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Our team is here to help. Contact us to discuss your specific needs.
          </p>
          <button 
            onClick={() => window.location.hash = 'contact'}
            className="bg-white text-[#0066CC] px-8 py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
