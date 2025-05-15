import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Author - Charles Muthui", 
  description: "Learn more about Charles Muthui (DR. D), author of 'Beat Your Yesterday' Discover her journey of mission, strength, and purpose.",
};

const Author = () => {
  return (
    <section>
      <Header />
      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            AUTHOR
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              AUTHOR
            </p>
          </div>
        </div>
      </div>

      {/* About Marry Section */}
      <div className="bg-black py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Image + First Two Paragraphs Side-by-Side */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Image */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <Image
                src="/assets/images/ebook.jpg"
                alt="Marypee"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Title + First Paragraphs  drop-shadow-[0_0_20px_theme('colors.myred')] */}
            <div className="w-full lg:w-2/3">
              <h4 className="text-myred text-xl md:text-2xl font-bold tracking-wide mb-2 uppercase">
                ABOUT CHARLES —— 
              </h4>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left ">
                Charles Muthui Mumo (DR. D) : A Storyteller, Motivator or a Philosopher
              </h2>
              <div className="text-white text-base md:text-lg space-y-6 leading-relaxed">
                <p className="tracking-tight">
                  Charles Muthui Mumo, fondly known as Dr. D, is more than just a writer he’s a storyteller, motivator, philosopher, and devoted family man. Born with a passion for expression and raised with a mind that questions everything, Charles began writing as a teenager, crafting entire worlds with his imagination. Today, his words resonate with men seeking purpose, children learning through joy, and anyone searching for truth in a noisy world.
                </p>
                <p className="tracking-tight">
                  Now based in the USA, Charles writes not for applause, but for healing both his and others. His work is rooted in self-reflection, humor, fatherhood, motivation, and the ever-evolving pursuit of balance. For Charles, writing is an escape, a mirror, and above all, a legacy.
                </p>
                <p className="tracking-tight text-myred font-bold italic">
                  "Every time I write, I discover something new," he says, “It’s a conversation with myself before it’s shared with the world.”
                </p>
              </div>
            </div>
          </div>

          {/* Remaining Paragraphs Below Image */}
          <div className="w-full text-white text-base md:text-lg space-y-6 leading-relaxed mt-4">
            <p className="tracking-tight">
              A proud father, his favorite work to date is Rock On a vibrant, animated picture book he co-created with his daughter, Taji Muthui. “Getting her off the screen to write with me was the biggest win of all,” he beams. His upcoming book Say Your Say as a Man is a heartfelt offering to his son and to men everywhere navigating the journey of manhood.
            </p>
            <p className="tracking-tight">
              Charles doesn’t claim literary awards yet but his authenticity, wit, and wisdom speak louder than any trophy. He believes in doing his best every day, valuing presence over perfection, and honoring relationships with intentionality and gratitude.
            </p>
            <p className="tracking-tight">
              With a spirit shaped by personal trials, philosophical reflection, and the love of a powerful partner, Susan Ndolo-Muthui, Charles brings raw truth and deep joy to everything he writes. His words challenge you to grow, laugh, heal, and most of all keep going.
            </p>
            <p className="tracking-tight">
              Because as Dr. D reminds us,<br /> 
              <span className="text-myred font-bold italic">"your best may not be enough today, but it will always be your best and that’s what matters most."</span>
            </p>
            {/* <p className="tracking-tight"></p>
                <p className="tracking-tight"></p> */}
          </div>
        </div>
      </div>

      {/* Writer Gallery Section */}
      <div className="bg-black py-12 px-6 md:px-10 lg:px-20">
        <h2 className="text-myred text-3xl md:text-4xl font-bold text-center mb-8">
          WRITER GALLERY
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            "/assets/images/marry1.jpeg",
            "/assets/images/marry2.jpeg",
            "/assets/images/marry3.jpeg",
            "/assets/images/marry5.jpeg",
            "/assets/images/marry6.jpeg"
          ].map((src, index) => (
            <div key={index} className="group relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={src}
                alt={"Writer"}
                width={300}
                height={300}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
  
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </section>
  );
};
export default Author; 