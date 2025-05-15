import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-black text-white py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-myred mb-3">OUT NOW —</h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            BEAT YOUR YESTERDAY.
          </h1>
          {/* <p className="text-sm md:text-base mb-5 text-gray-200 leading-relaxed">
            The story of heartbreak, betrayal, and forgiveness shook the heavens. She gave shelter to a stranger, but what she got in return was betrayal, chaos, and a test of faith. It’s a must-read for anyone who’s ever trusted the wrong person.
          </p> */}

           <p className="text-sm md:text-base mb-5 text-gray-200 leading-relaxed">
             In Beat Your Yesterday, Charles Muthui known to many as Dr. D offers a bold, deeply personal, and unapologetically honest reflection on resilience, growth, and self-belief. This isn’t a sugar-coated self-help guide. It’s a journey through the mess, the mistakes, and the miracles of a life still unfolding.
          </p>
   
          <Link href={"https://www.amazon.com/s?k=beat+your+yesterday&crid=5G3AH1FI1D9A&sprefix=beat+your+yesterday%2Caps%2C276&ref=nb_sb_noss"} target='_blank'>  
          <button className="bg-myred text-white uppercase text-lg font-semibold px-8 py-4 rounded-full border-2 border-white/50 shadow-2xl hover:bg-opacity-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:scale-110 transition-all duration-300 ease-in-out">
            Get the Book
          </button>
          </Link>

        </div>  

        <div className="md:w-1/2 flex justify-center md:justify-center">
          <Image
            src="/assets/images/mockup.png"
            alt="Book Cover"
            width={960}
            height={1240}
            className="max-w-[480px] md:max-w-[560px] lg:max-w-[680px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;

 