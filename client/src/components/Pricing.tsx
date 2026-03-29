import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects',
    price: '$999',
    period: '/month',
    cta: 'Get Started',
    highlighted: false,
    features: [
      { name: 'Up to 4 BookTok videos', included: true },
      { name: 'Basic eBook promotion', included: true },
      { name: 'Content strategy consultation', included: true },
      { name: 'Monthly analytics report', included: true },
      { name: 'Email support', included: true },
      { name: 'UGC campaigns', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom integrations', included: false },
    ],
  },
  {
    name: 'Professional',
    description: 'Best for growing brands',
    price: '$2,499',
    period: '/month',
    cta: 'Get Started',
    highlighted: true,
    features: [
      { name: 'Up to 12 BookTok videos', included: true },
      { name: 'Advanced eBook promotion', included: true },
      { name: 'Content strategy consultation', included: true },
      { name: 'Weekly analytics report', included: true },
      { name: 'Priority email support', included: true },
      { name: 'UGC campaigns (up to 8)', included: true },
      { name: 'Priority support', included: true },
      { name: 'Custom integrations', included: false },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large-scale campaigns',
    price: 'Custom',
    period: 'pricing',
    cta: 'Contact Sales',
    highlighted: false,
    features: [
      { name: 'Unlimited BookTok videos', included: true },
      { name: 'Premium eBook promotion', included: true },
      { name: 'Dedicated strategy team', included: true },
      { name: 'Real-time analytics dashboard', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Unlimited UGC campaigns', included: true },
      { name: 'Priority support', included: true },
      { name: 'Custom integrations', included: true },
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
      id="pricing"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#FF6B5B] font-semibold mb-2">PRICING</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible Plans for Every Budget
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect plan for your brand. All plans include our core services and support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`rounded-2xl p-8 transition-smooth ${
                plan.highlighted
                  ? 'bg-white border-2 border-[#FF6B5B] shadow-2xl scale-105 md:scale-100 md:col-span-1'
                  : 'bg-white border border-gray-200 hover:border-[#FF6B5B]'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white gradient-coral-pink">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-900">
                  {plan.price}
                  <span className="text-lg text-gray-600 font-normal">
                    {plan.period}
                  </span>
                </p>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full px-6 py-3 rounded-lg font-semibold mb-8 transition-smooth ${
                  plan.highlighted
                    ? 'gradient-coral-pink text-white hover:shadow-glow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-4 border-t border-gray-200 pt-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check size={20} className="text-[#FF6B5B] flex-shrink-0 mt-0.5" />
                    ) : (
                      <X size={20} className="text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20 pt-20 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No, there are no setup fees. You only pay the monthly subscription amount.',
              },
              {
                q: 'Do you offer discounts for annual billing?',
                a: 'Yes! Get 20% off when you pay annually. Contact our sales team for details.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
