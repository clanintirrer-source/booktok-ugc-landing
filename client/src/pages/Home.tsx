import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import SocialStatsVideo from '@/components/SocialStatsVideo';
import Contact from '@/components/Contact';
import SEOMeta from '@/components/SEOMeta';
import AnimationPolish from '@/components/AnimationPolish';

/**
 * Home Page - Main landing page with all sections
 * 
 * Design Philosophy: Vibrant Creative with Gradient Accents
 * - Dynamic color transitions (coral to teal gradients)
 * - Playful, energetic visual language
 * - Smooth scroll animations with GSAP
 * - Responsive design for all devices
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEOMeta />
      <AnimationPolish />
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Portfolio Gallery */}
        <Portfolio />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Pricing Table */}
        <Pricing />

        {/* Blog Section */}
        <Blog />

        {/* Social Stats Video */}
        <SocialStatsVideo />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-coral-pink flex items-center justify-center">
                  <span className="text-white font-bold">BT</span>
                </div>
                <span className="font-bold text-lg">BookTok UGC</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional BookTok and UGC content creation for brands.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">BookTok Videos</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">eBook Promotion</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">UGC Content</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Strategy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:omerjack62@gmail.com" className="hover:text-white transition-colors">omerjack62@gmail.com</a></li>
                <li><a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a></li>
                <li>New York, USA</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; 2024 BookTok UGC. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
