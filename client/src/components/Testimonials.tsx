import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Publishing Director',
    company: 'Epic Publishing',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'BookTok UGC transformed our book launches. Their creative approach and professional execution resulted in a 300% increase in sales within the first month.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Manager',
    company: 'Digital Dreams Publishing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'The team delivered exceptional UGC content that resonated with our target audience. Their understanding of social trends is unmatched.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Brand Manager',
    company: 'Heart Stories Press',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'Working with this team was a game-changer. They created authentic content that built genuine community engagement around our eBooks.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Martinez',
    role: 'CEO',
    company: 'Growth Mindset Publishing',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    text: 'Exceptional service from start to finish. The BookTok videos they created went viral and exceeded all our expectations.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Jessica Lee',
    role: 'Content Director',
    company: 'Teen Reads Publishing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'Professional, creative, and results-driven. They understand the BookTok ecosystem better than anyone we\'ve worked with.',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Autoplay carousel
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#FF6B5B] font-semibold mb-2">CLIENT REVIEWS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Join hundreds of satisfied brands who have transformed their presence with our services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={carouselRef}
            className="relative bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg"
          >
            {/* Testimonial Content */}
            <div className="min-h-96 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-[#FF6B5B] fill-[#FF6B5B]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FF6B5B]"
                />
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-lg border border-gray-300 hover:border-[#FF6B5B] hover:bg-[#FF6B5B]/10 transition-smooth"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-lg border border-gray-300 hover:border-[#FF6B5B] hover:bg-[#FF6B5B]/10 transition-smooth"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentIndex
                        ? 'bg-[#FF6B5B] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF6B5B] mb-2">500+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF6B5B] mb-2">4.9★</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF6B5B] mb-2">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
