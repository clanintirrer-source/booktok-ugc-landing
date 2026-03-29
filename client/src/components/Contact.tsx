import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="container">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#FF6B5B] font-semibold mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to elevate your brand? Contact us today and let's discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg gradient-coral-pink flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:omerjack62@gmail.com"
                    className="text-gray-600 hover:text-[#FF6B5B] transition-colors"
                  >
                    omerjack62@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg gradient-coral-pink flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-[#FF6B5B] transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg gradient-coral-pink flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">
                    New York, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-lg bg-[#FF6B5B]/10 border border-[#FF6B5B]/20">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Response Time:</span> We typically respond within 24 hours during business days.
              </p>
            </div>

            {/* Fiverr Gig Showcase */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#FF6B5B]/5 to-[#20C997]/5 border border-[#FF6B5B]/20">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Hire Us on Fiverr</h4>
              <a
                href="https://www.fiverr.com/s/XL1ZkGP"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden hover:shadow-lg transition-smooth group mb-4"
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663488765166/ZjbMruj9xQ4LtkHfT29qAA/fiverr-gig-showcase-DFNwyHN5cWpzFQqbcYN2CG.webp"
                  alt="BookTok & eBook Promotion Services on Fiverr"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 brightness-110"
                />
              </a>
              <p className="text-sm text-gray-600 mb-4">
                Professional BookTok videos and eBook promotion services. Check out our Fiverr gig for more details and reviews from satisfied clients.
              </p>
              <a
                href="https://www.fiverr.com/s/XL1ZkGP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#FF6B5B] text-[#FF6B5B] font-semibold hover:bg-[#FF6B5B]/5 transition-smooth"
              >
                View on Fiverr
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-200"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B5B] focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]/20 transition-smooth"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B5B] focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]/20 transition-smooth"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B5B] focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]/20 transition-smooth"
                placeholder="+1 (234) 567-890"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B5B] focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]/20 transition-smooth"
                placeholder="Your company"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6B5B] focus:outline-none focus:ring-2 focus:ring-[#FF6B5B]/20 transition-smooth resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
                ✓ Message sent successfully! We'll be in touch soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                ✗ Error sending message. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg gradient-coral-pink text-white font-semibold flex items-center justify-center gap-2 hover:shadow-glow-lg transition-smooth disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
