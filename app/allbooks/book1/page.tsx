import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Book - Beat Your Yesterday | Charles Muthui", 
  description: "Book: Beat Your Yesterday - By Charles Muthui. A story of betrayal and forgiveness.",
};

const Book1 = () => {
  return (
    <section>
      <Header />
      <div className="relative w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white border-t-2 border-b-2 border-myred py-4 mb-8">
            BOOKS
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              BOOK
            </p>
          </div>
        </div>
      </div>

      <div className='w-full bg-black px-6 md:px-10 lg:px-20 py-12'>
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-myred text-center pb-8 underline hover:text-white transition duration-200">
            BEAT YOUR YESTERDAY
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Image Container - Now Larger */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="bg-black p-4 rounded-md w-full max-w-[500px]">
                <Image
                  src="/assets/images/mockup.png"
                  alt="Book Cover"
                  width={800}  // Increased size
                  height={1000} // Maintained aspect ratio
                  className="w-full h-auto rounded-md object-contain shadow-lg"
                  priority
                />
              </div>
            </div>
            
            {/* Text Container */}
            <div className="w-full lg:w-1/2 text-white space-y-6 flex flex-col items-center">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed">
                  In <span className="italic">Beat Your Yesterday</span>, Charles Muthui known to many as Dr. D offers a bold, deeply personal, and unapologetically honest reflection on resilience, growth, and self-belief. This isn't a sugar-coated self-help guide. It's a journey through the mess, the mistakes, and the miracles of a life still unfolding.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  With the wisdom of a mentor, the warmth of a brother, and the grit of someone who's lived through it all, Dr. D shares stories that span continents and seasons—rising from rural Kenya to American lecture halls, from childhood wounds to adult awakenings.
                </p>
              </div>

              {/* Centered Button */}
              <div className="w-full flex justify-center pt-6">
                <Link 
                  href={"https://www.amazon.com/s?k=beat+your+yesterday&crid=5G3AH1FI1D9A&sprefix=beat+your+yesterday%2Caps%2C276&ref=nb_sb_noss"} 
                  className="bg-myred hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md 
                            text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 
                            shadow-lg hover:shadow-red-500/50 text-center min-w-[250px]"
                >
                  GET THE BOOK HERE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Book1;