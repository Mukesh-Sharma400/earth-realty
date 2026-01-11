"use client";

import { Hero } from "../sections/Hero";
import { TopListing } from "../sections/TopListing";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <TopListing />
    </BaseLayout>
  );
}
