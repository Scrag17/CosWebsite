import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import FeaturesListSection from '../components/FeaturesListSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import NewsletterSection from '../components/NewsletterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <FeaturesListSection />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
      <NewsletterSection />
    </main>
  );
}