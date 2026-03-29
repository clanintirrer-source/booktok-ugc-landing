import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoStats {
  comments: number;
  likes: number;
  followers: number;
  sales: number;
}

const DEFAULT_VIDEO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663488765166/ZjbMruj9xQ4LtkHfT29qAA/PROMOTEYOURBOOKWITHMYBOOKTOKACC_3e0c8561.mp4';

export default function SocialStatsVideo() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(DEFAULT_VIDEO_URL);

  const stats: VideoStats = {
    comments: 1500,
    likes: 2000,
    followers: 3200,
    sales: 1300,
  };

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

      gsap.from(videoContainerRef.current, {
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

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="social-stats"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container">
        {/* Section Header */}
        <div ref={titleRef} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#FF6B5B] font-semibold mb-2">SOCIAL PROOF</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            BookTok Success Showcase
          </h2>
          <p className="text-gray-600 text-lg">
            Watch our latest BookTok video and see the incredible engagement and sales results we've achieved.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={videoContainerRef}
            className="relative rounded-3xl overflow-hidden bg-black shadow-2xl"
          >
            {/* Video Player */}
            {videoUrl ? (
              <div className="relative w-full bg-black">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-auto block"
                  controls={false}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Play/Pause Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={handlePlayPause}
                      className="w-20 h-20 rounded-full gradient-coral-pink flex items-center justify-center hover:shadow-glow-lg transition-smooth transform hover:scale-110"
                    >
                      <Play size={40} className="text-white fill-white ml-1" />
                    </button>
                  </div>
                )}

                {/* Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-center justify-between">
                  <button
                    onClick={handlePlayPause}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause size={24} className="text-white" />
                    ) : (
                      <Play size={24} className="text-white fill-white" />
                    )}
                  </button>

                  <button
                    onClick={handleMuteToggle}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX size={24} className="text-white" />
                    ) : (
                      <Volume2 size={24} className="text-white" />
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video bg-gray-900 flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-white text-lg font-semibold mb-6">
                    Upload Your BookTok Video
                  </p>
                  <label className="inline-block px-8 py-4 rounded-lg gradient-coral-pink text-white font-semibold cursor-pointer hover:shadow-glow-lg transition-smooth">
                    Choose Video File
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      className="hidden"
                    />
                  </label>
                  <p className="text-gray-400 text-sm mt-4">
                    Supported formats: MP4, WebM, MOV (Max 500MB)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: 'Comments', value: stats.comments, icon: '💬' },
              { label: 'Likes', value: stats.likes, icon: '❤️' },
              { label: 'Followers', value: stats.followers, icon: '👥' },
              { label: 'Sales', value: stats.sales, icon: '💰' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-200 text-center hover:border-[#FF6B5B] hover:shadow-lg transition-smooth"
              >
                <p className="text-3xl mb-2">{stat.icon}</p>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value.toLocaleString()}
                </p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#FF6B5B]/10 to-[#20C997]/10 border border-[#FF6B5B]/20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's create a customized strategy to boost your brand's BookTok presence and drive real sales.
            </p>
            <button className="px-8 py-4 rounded-lg gradient-coral-pink text-white font-semibold hover:shadow-glow-lg transition-smooth inline-flex items-center gap-2">
              Start Your Campaign
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
