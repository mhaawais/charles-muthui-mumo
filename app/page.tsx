import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import About from "@/components/about";
import Blog from "@/components/blog";

export const metadata: Metadata = {
  title: "hello page",  
  description: "this is my hello page",
};

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero2 />
      <About />
      <Blog />
      <Footer />
    </div>
);
}
