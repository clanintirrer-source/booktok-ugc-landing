import { useEffect, useRef } from 'react';
import { Video, BookOpen, Users, Zap, TrendingUp, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Video,
    title: 'BookTok Video Creation',
    description: 'Professional, engaging BookTok videos that drive engagement and promote your books across social platforms.',
    features: ['High-quality production', 'Trending formats', 'Viral optimization'],
  },
  {
    icon: BookOpen,
    title: 'eBook Promotion',
    description: 'Strategic eBook marketing campaigns that reach your target audience and boost sales.',
    features: ['Targeted campaigns', 'Multi-platform reach', 'Conversion focused'],
  },
  {
    icon: Users,
    title: 'User-Generated Content',
    description: 'Authentic UGC campaigns that build community and trust around your brand.',
    features: ['Community building', 'Authentic content', 'Brand advocacy'],
  },
  {
    icon: Zap,
    title: 'Content Strategy',
    description: 'Data-driven content strategies tailored to your brand goals and audience.',
    features: ['Analytics-driven', 'Trend forecasting', 'Custom planning'],
  },
  {
    icon: TrendingUp,
    title: 'Growth Optimization',
    description: 'Maximize reach and engagement with our proven growth optimization techniques.',
    features: ['SEO optimization', 'Engagement boost', 'Audience growth'],
  },
  {
    icon: Award,
    title: 'Brand Collaboration',
    description: 'Strategic partnerships and collaborations that amplify your brand message.',
    features: ['Partnership setup', 'Joint campaigns', 'Co-creation'],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
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

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#FF6B5B] font-semibold mb-2">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Content Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From BookTok videos to strategic UGC campaigns, we offer everything you need to elevate your brand presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#FF6B5B] hover:shadow-lg transition-smooth group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg gradient-coral-pink flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth">
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full gradient-coral-pink"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
