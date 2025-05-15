import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero2 = () => {
  return (
    <div className="bg-black w-full py-10 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8">
        
        {/* Image Section */}
        {/* <div className="bg-[#F0ECE2] p-6 rounded-md w-full max-w-[280px]">
          <Image 
            src="/assets/images/wisdom3.jpg" 
            alt="Book Image" 
            width={300} 
            height={400} 
            className="w-full rounded-md"
          />
        </div> */}

        {/* Text Section               [#F0ECE2]            bg-[#a3b4ce]*/}
        <div className="bg-[#06202B] p-8 rounded-md w-full max-w-[500px] flex flex-col justify-center items-center lg:items-start min-h-[450px] text-center lg:text-left font-serif">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-myred mb-3">OUT NOW —</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ROCK ON: <br />
            <span className="text-xl md:text-2xl font-light">
              ROCK BOTTOM WASN’T THE END, IT WAS THE BEGINNING.
            </span>
          </h2>

          <h3 className="mb-8 text-xl text-[#c4c0af]">
            By: <br /> 
             TAJI MUTHUI.
          </h3>
          <Link href={"https://www.amazon.com/Rock-TAJI-MUTHUI-ebook/dp/B0F886MQFV/ref=sr_1_2?crid=3VKCDHD8H5P5L&dib=eyJ2IjoiMSJ9.iee5uwfWzNsKfJ820T1h_giHnziv7znrMEhQAq_XBqc-zkmaJgPOsCsCRKOJGiU1WKK0SXGDmaizFF_WgNKipLRa8fwZ4Ua_ZNiwXW9ptPsOStoj64Lxjo2c5JMMPBCVKTi82Lvjeov2lHI61K-tm1GxFe58RV77hXM_ViO3RZzvptf8SOkOMHeuYWf0BKDFp3SDwEUMfJMLXhMW824-AKkxzApDb-mzVxPZkoTarUI.udbaHegIqYDgHxgcp2aBhButWHWa-dZYfSxm6Kw5UZA&dib_tag=se&keywords=rock+on&qid=1747339196&sprefix=rock+on%2Caps%2C406&sr=8-2"} target="_blank"> 
          <button 
            className="inline-block bg-myred text-white px-6 py-3 font-semibold text-lg rounded-md transition-all duration-300 hover:bg-onhover     hover:scale-110 ease-in-out"
          >
            Get The BooK!
          </button>
          </Link>
        </div>

        <div className="bg-black p-6 rounded-md w-full max-w-[420px]">
          <Image 
            src="/assets/images/mockup-rockon.png" 
            alt="Book Image" 
            width={800} 
            height={1000} 
            className="w-full rounded-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero2;