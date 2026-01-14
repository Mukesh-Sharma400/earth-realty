"use client";

import { Hero } from "../sections/Hero";
import { TopListing } from "../sections/TopListing";
import { Counting } from "../sections/Counter";
import { OurAgents } from "../sections/OurAgents";
import { Testimonials } from "../sections/Testimonial";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Counting/>
      <TopListing />
      <OurAgents />
      <Testimonials />
    </BaseLayout>
  );
}
