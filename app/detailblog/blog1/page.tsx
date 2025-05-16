import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Charles Muthui | Beat Your Yesterday",
  description:
    "Blog: from Beat Your Yesterday - Charles Muthui shares insights on trust, betrayal, and healing.",
};

const Blog1 = () => {
  return (
    <section>
      <Header />
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center py-16 md:py-20 lg:py-24"
        style={{ backgroundImage: "url('/assets/images/Tim-Follow.jpg')" }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />
        <div className="container mx-auto flex flex-col justify-center items-center px-4 relative z-10">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-8 underline hover:text-myred transition duration-200">
            BEAT YOUR YESTERDAY
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-white hover:text-myred transition duration-200">
              BLOG
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="w-full bg-black py-16 px-6 md:px-10 lg:px-20">
        <h2 className="text-myred text-2xl md:text-4xl font-bold text-center mb-10">
          A Wake-Up Call for the Dreamers, the Fighters, and the Broken:
        </h2>
        <div className="w-full text-white text-base md:text-lg space-y-6 leading-relaxed tracking-tight max-w-4xl mx-auto">
          <p className="italic">
            By Dr. D : <br />
            What if the only person you needed to outgrow... was who you were
            yesterday?
          </p>

          <p className="text-lg font-semibold">
            "In Beat Your Yesterday,{" "}
            <span className="font-extrabold">
              Charles Muthui known to many as Dr. D
            </span>{" "}
            offers a bold, deeply personal, and unapologetically honest
            reflection on resilience, growth, and self-belief. This isn’t a
            sugar-coated self-help guide. It’s a journey through the mess, the
            mistakes, and the miracles of a life still unfolding."
          </p>
          <p>
            With the wisdom of a mentor, the warmth of a brother, and the grit
            of someone who’s lived through it all, Dr. D shares stories that
            span continents and seasons rising from rural Kenya to American
            lecture halls, from childhood wounds to adult awakenings. Through
            every chapter, one message remains:
          </p>
          <p className="uppercase font-bold text-lg">
            You’re not stuck. You’re evolving. And your breakthrough is still
            possible.
          </p>
          <p className="italic">Inside this book, you’ll find:</p>

          <p>
            • Personal stories of pain, hustle, and healing
            <br />
            • Raw, real-life stories of adversity, hustle, and healing
            <br />
            • Practical lessons wrapped in humor, humility, and heart
            <br />
            • Motivation to break out of your comfort zone and own your future
            <br />• Candid reflections on failure, faith, family, and finding
            your voice
          </p>

          <p>
            A powerful reminder: you don’t need permission to grow just the
            courage to begin <br />
            <span className="font-bold">Why this book matters:</span>
          </p>

          <p className="pl-4 border-l-4 border-myred italic">
            "Because Beat Your Yesterday isn’t about perfection it’s about
            progress"
            <br />
            "Because that voice telling you 'you can’t' needs to meet the one
            inside you that says, 'just watch me.' "<br />
            "Because real success often comes quietly in the small wins, the
            daily decisions, and the unwavering refusal to give up."
          </p>

          <p>
            This book is for the underdog. For the one tired of pretending
            everything’s fine. For the one who needs to hear: <br />{" "}
            <span className="font-extrabold">
              You’re not too late. You’re right on time.
            </span>
          </p>

          <p className="text-myred font-bold text-xl drop-shadow-none">
            This book is your next must-read :
          </p>
          <p className="text-center font-semibold text-lg">
            Grab your copy of <br />
            <span className="uppercase  underline decoration-myred">
              BEAT YOUR YESTERDAY
            </span>
          </p>
          <p className="text-center font-medium">
            …take the first step toward the version of you that refuses to
            settle.
          </p>

          {/* Tags Footer */}
          <div className="mt-12 text-[15px] font-medium flex flex-wrap gap-x-4 gap-y-2 tracking-widest leading-snug">
            <span>• Self-help book for men</span>
            <span>• Overcoming failure and setbacks</span>
            <span>• Inspirational real-life stories</span>
            <span>• Motivational book for personal growth</span>
            <span>• African author inspirational journey</span>
            <span>• Beat your past and build your future</span>
            <span>• Resilience and mindset transformation</span>
            <span>• Books about starting over in life</span>
          </div>

          <div className="mt-6 text-[15px] tracking-wide font-semibold text-right">
            Charles Muthui (DR. D)
          </div>

          <div className="px-6 sm:px-12 lg:px-20 xl:px-28 mt-14 border-t pt-6">
            <div className="text-left">
              <Link href="/detailblog/blog2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold hover:underline leading-snug cursor-pointer text-review">
                  ROCK ON: &gt; <br />
                  ROCK BOTTOM WASN’T THE END.
                  <br />
                  IT WAS THE BEGINNING.
                  <br />
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};
export default Blog1;
