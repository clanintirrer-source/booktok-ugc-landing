import { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to BookTok Marketing in 2024',
    excerpt: 'Learn the latest strategies and trends for promoting your books on BookTok. Discover what makes content go viral and how to leverage it for your brand.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff15?w=400&h=250&fit=crop',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'How to Create Authentic UGC Content That Converts',
    excerpt: 'Explore the secrets behind creating user-generated content that resonates with audiences and drives real business results.',
    author: 'Michael Chen',
    date: 'March 12, 2024',
    category: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=250&fit=crop',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'eBook Promotion Strategies That Actually Work',
    excerpt: 'Discover proven tactics for promoting your eBooks across multiple platforms and reaching your target audience effectively.',
    author: 'Emma Williams',
    date: 'March 10, 2024',
    category: 'eBook Promotion',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop',
    readTime: '7 min read',
  },
];

export default function Blog() {
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
      id="blog"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="container">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#FF6B5B] font-semibold mb-2">INSIGHTS & TIPS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry Insights & Tips
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends, strategies, and insights in BookTok and UGC marketing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#FF6B5B] hover:shadow-lg transition-smooth group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white gradient-coral-pink">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#FF6B5B] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <button className="flex items-center gap-1 text-[#FF6B5B] font-semibold text-sm hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 rounded-lg gradient-coral-pink text-white font-semibold hover:shadow-glow-lg transition-smooth inline-flex items-center gap-2">
            View All Articles
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
