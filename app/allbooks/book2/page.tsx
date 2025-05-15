import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Book - Rock On | Taji Muthui", 
  description: "Book: Rock On - By Taji Muthui daughter of Charles Muthui. Life's lessons through a child's innocent perspective.",
};

const Book2 = () => {
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
            ROCK ON
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Image Container - Larger */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="bg-black p-4 rounded-md w-full max-w-[500px]">
                <Image
                  src="/assets/images/mockup-rockon.png"
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
                  <span className="italic">Rock On</span> is not just a picture book. It's a family masterpiece, a father-daughter collaboration born from real moments, real photos, and real love. Created by Dr. D and his daughter, Taji Muthui, this charming and colorful journey blends laughter, imagination, and the magic of togetherness into every page.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  What began as a fun experiment turned into a heartfelt legacy. This book isn't about perfection, it's about presence. It's about a dad who turned screen time into dream time. And in doing so, he gave his daughter the tools to express herself.
                </p>
              </div>

              {/* Centered Button */}
              <div className="w-full flex justify-center pt-6">
                <Link 
                  href={"https://www.amazon.com/Rock-TAJI-MUTHUI-ebook/dp/B0F886MQFV/ref=sr_1_2?crid=3VKCDHD8H5P5L&dib=eyJ2IjoiMSJ9.iee5uwfWzNsKfJ820T1h_giHnziv7znrMEhQAq_XBqc-zkmaJgPOsCsCRKOJGiU1WKK0SXGDmaizFF_WgNKipLRa8fwZ4Ua_ZNiwXW9ptPsOStoj64Lxjo2c5JMMPBCVKTi82Lvjeov2lHI61K-tm1GxFe58RV77hXM_ViO3RZzvptf8SOkOMHeuYWf0BKDFp3SDwEUMfJMLXhMW824-AKkxzApDb-mzVxPZkoTarUI.udbaHegIqYDgHxgcp2aBhButWHWa-dZYfSxm6Kw5UZA&dib_tag=se&keywords=rock+on&qid=1747339196&sprefix=rock+on%2Caps%2C406&sr=8-2"} 
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

export default Book2;