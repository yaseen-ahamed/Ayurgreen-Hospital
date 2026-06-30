"use client";

import React from "react";
import DifferentNationsSection from "@/components/ui/scroll-morph-hero";
import Hero from "@/components/hero/Hero";
import UnderstandingSection from "@/components/sections/UnderstandingSection";
import AdmireEcosystemSection from "@/components/sections/AdmireEcosystemSection";
import RehabilitationJourneySection from "@/components/sections/RehabilitationJourneySection";
import RehabVillagePreview from "@/components/sections/RehabVillagePreview";
import StoriesSection from "@/components/sections/StoriesSection";
import LifeGallerySection from "@/components/sections/LifeGallerySection";
import AyurgreenEcosystemSection from "@/components/sections/AyurgreenEcosystemSection";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      <DifferentNationsSection />
      <UnderstandingSection />
      <AdmireEcosystemSection />
      <RehabilitationJourneySection />
      <RehabVillagePreview />
      <StoriesSection />
      <LifeGallerySection />
      <AyurgreenEcosystemSection />
      <OurAssociationsSection />
    </div>
  );
}
