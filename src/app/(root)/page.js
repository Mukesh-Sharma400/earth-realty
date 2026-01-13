"use client";

import { Hero } from "../sections/Hero";
import { TopListing } from "../sections/TopListing";
import { Counting } from "../sections/Counter";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Counting/>
      <TopListing />
    </BaseLayout>
  );
}
