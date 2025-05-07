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

        {/* Text Section                           bg-[#a3b4ce]*/}
        <div className="bg-[#F0ECE2] p-8 rounded-md w-full max-w-[500px] flex flex-col justify-center items-center lg:items-start min-h-[450px] text-center lg:text-left font-serif">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
           I'm Out:    <br />
           The Reason Why I'm Leaving the Church 
          </h2>
          <h3 className="mb-8 text-xl text-gray-700">
            By: <br /> 
            Dwight Vincent Green Jr.
          </h3>
          <Link href={"https://www.amazon.com/s?k=I%27m+Out%3A+The+Reason+Why+I%27m+Leaving+The+Church&crid=I75DHGFKQRQP&sprefix=i%27m+out+the+reason+why+i%27m+leaving+the+church%2Caps%2C425&ref=nb_sb_noss"} target="_blank"> 
          <button 
            className="inline-block bg-black text-white px-6 py-3 font-semibold text-lg rounded-md transition-all duration-300 hover:bg-gray-800"
          >
            Get The BooK!
          </button>
          </Link>
        </div>




        <div className="bg-[#F0ECE2] p-6 rounded-md w-full max-w-[280px]">
          <Image 
            src="/assets/images/wisdom3.jpg" 
            alt="Book Image" 
            width={300} 
            height={400} 
            className="w-full rounded-md"
          />
        </div>



      </div>
    </div>
  );
};

export default Hero2;