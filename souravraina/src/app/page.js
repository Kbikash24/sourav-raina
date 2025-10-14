"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import ContentTypes from "@/components/ContentTypes";
import Subjects from "@/components/Subjects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <ContentTypes />
      <Subjects />
      <CTA />
      <Footer />
    </main>
  );
}
