import React from 'react';
import AboutHeader from '../components/about/AboutHeader';
import AboutStory from '../components/about/AboutStory';
import AboutFeatures from '../components/about/AboutFeatures';
import TeamSection from '../components/about/TeamSection';
import AboutTestimonials from '../components/about/AboutTestimonials';
import AboutContact from '../components/about/AboutContact';

export default function AboutPage() {
  return (
    <main>
      <AboutHeader />
      <AboutStory />
      <AboutFeatures />
      <TeamSection />
      <AboutTestimonials />
      <AboutContact />
    </main>
  );
}