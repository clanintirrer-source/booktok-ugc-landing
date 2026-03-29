import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: 1,
    title: 'Fantasy Novel Campaign',
    category: 'BookTok',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop',
    brand: 'Epic Publishing',
  },
  {
    id: 2,
    title: 'Romance Series Promotion',
    category: 'UGC',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
    brand: 'Heart Stories',
  },
  {
    id: 3,
    title: 'Self-Help eBook Launch',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff15?w=500&h=500&fit=crop',
    brand: 'Growth Mindset',
  },
  {
    id: 4,
    title: 'Thriller Collection',
    category: 'BookTok',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop',
    brand: 'Dark Tales Press',
  },
  {
    id: 5,
    title: 'Young Adult Series',
    category: 'UGC',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
    brand: 'Teen Reads',
  },
  {
    id: 6,
    title: 'Educational Content',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff15?w=500&h=500&fit=crop',
    brand: 'Knowledge Hub',
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

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

      // Animate grid items
      const items = (gridRef.current as unknown as HTMLElement)?.querySelectorAll('[data-portfolio-item]');
      if (items) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="container">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#FF6B5B] font-semibold mb-2">OUR WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our collection of successful campaigns and brand collaborations that delivered exceptional results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              data-portfolio-item
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[#FF6B5B] text-sm font-semibold mb-2">{item.category}</p>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{item.brand}</p>
                <div className="flex items-center gap-2 text-white">
                  <Play size={16} fill="currentColor" />
                  <span className="text-sm">View Project</span>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Play size={24} className="text-white fill-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/20 hover:bg-black/40 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-[#FF6B5B] font-semibold mb-2">{selectedItem.category}</p>
              <h3 className="text-3xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-600 mb-6">{selectedItem.brand}</p>

              <div className="grid grid-cols-3 gap-4 mb-8 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-[#FF6B5B]">2.5M</p>
                  <p className="text-sm text-gray-600">Views</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FF6B5B]">150K</p>
                  <p className="text-sm text-gray-600">Engagement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FF6B5B]">+45%</p>
                  <p className="text-sm text-gray-600">Growth</p>
                </div>
              </div>

              <button className="w-full px-6 py-3 rounded-lg gradient-coral-pink text-white font-semibold hover:shadow-glow-lg transition-smooth">
                View Full Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
