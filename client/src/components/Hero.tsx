import { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Animate CTA buttons
      const buttons = (ctaRef.current as unknown as HTMLElement)?.querySelectorAll('button');
      if (buttons) {
        gsap.from(buttons, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: 0.4,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663488765166/ZjbMruj9xQ4LtkHfT29qAA/hero-booktok-bceuxVzZyFSMzSXt6u4ieK.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Elevate Your Brand with <span className="gradient-coral-pink bg-clip-text text-transparent">BookTok & UGC</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Professional BookTok videos, eBook promotion, and user-generated content creation for brands that want to stand out. We transform your vision into viral moments.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg gradient-coral-pink text-white font-semibold flex items-center justify-center gap-2 hover:shadow-glow-lg transition-smooth group">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-lg bg-white/20 backdrop-blur-md text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/30 transition-smooth border border-white/30">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div>
              <p className="text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-sm text-gray-200">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">10M+</p>
              <p className="text-sm text-gray-200">Total Reach</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">98%</p>
              <p className="text-sm text-gray-200">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
