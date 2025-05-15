import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import About from "@/components/about";
import Blog from "@/components/blog";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books by Muthui",  
  description: "Official site for the Amazon book by Charles Muthui & Taji Muthui.",
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
