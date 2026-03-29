import { useEffect } from 'react';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEOMeta({
  title = 'BookTok & UGC Professional Landing Page - Video Creation & eBook Promotion',
  description = 'Professional BookTok videos, eBook promotion, and user-generated content creation for brands. Transform your vision into viral moments with our expert team.',
  keywords = 'BookTok, UGC, video creation, eBook promotion, content marketing, social media',
  ogImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663488765166/ZjbMruj9xQ4LtkHfT29qAA/hero-booktok-bceuxVzZyFSMzSXt6u4ieK.webp',
  ogUrl = 'https://booktok-ugc-landing.manus.space',
}: SEOMetaProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let tag = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }

      tag.content = content;
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('charset', 'utf-8');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', ogUrl, true);
    updateMetaTag('og:type', 'website', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Additional meta tags
    updateMetaTag('author', 'BookTok UGC');
    updateMetaTag('theme-color', '#FF6B5B');
  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
}
