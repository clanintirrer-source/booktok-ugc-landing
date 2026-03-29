import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animation Polish Component
 * Enhances global animations and scroll effects for better UX
 */
export default function AnimationPolish() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Parallax effect for hero section
    const heroSection = document.getElementById('home');
    if (heroSection) {
      gsap.to(heroSection, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
          markers: false,
        },
        y: -100,
        ease: 'none',
      });
    }

    // Stagger animations for service cards on scroll
    const serviceCards = document.querySelectorAll('[data-service-card]');
    if (serviceCards.length > 0) {
      gsap.from(serviceCards, {
        scrollTrigger: {
          trigger: '#services',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('[data-stat-number]');
    statNumbers.forEach((stat) => {
      const finalValue = parseInt(stat.textContent?.replace(/\D/g, '') || '0');
      const isPercentage = stat.textContent?.includes('%');

      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          const current = Math.floor(this.targets()[0].textContent);
          stat.textContent = current.toLocaleString() + (isPercentage ? '%' : '+');
        },
      });
    });

    // Hover effects for buttons
    const buttons = document.querySelectorAll('button[class*="gradient"]');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('[data-fade-in]');
    fadeElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
