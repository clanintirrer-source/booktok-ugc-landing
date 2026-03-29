import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useAppStore } from '@/store/appStore';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection } = useAppStore();

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Blog', id: 'blog' },
    { label: 'Video', id: 'social-stats' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-coral-pink flex items-center justify-center">
            <span className="text-white font-bold text-lg">BT</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">BookTok UGC</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs lg:text-sm font-medium transition-smooth ${
                activeSection === item.id
                  ? 'text-[#FF6B5B]'
                  : 'text-gray-600 hover:text-[#FF6B5B]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 rounded-lg gradient-coral-pink text-white font-medium hover:shadow-glow transition-smooth">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 font-medium transition-smooth ${
                  activeSection === item.id
                    ? 'text-[#FF6B5B]'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full px-4 py-2 rounded-lg gradient-coral-pink text-white font-medium mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
