import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Taji Muthui | Rock On",
  description:
    "Blog: From Rock On - Taji Muthui reflects on innocence, new beginnings, and fresh perspectives.",
};

const Blog2 = () => {
  return (
    <section>
      <Header />
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center py-16 md:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/assets/images/Tim-Follow.jpg')",
        }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
        <div className="container mx-auto flex flex-col justify-center items-center px-4 relative z-10">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white underline mb-8 hover:text-myred transition duration-200">
            ROCK ON
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
          A Joyful Tribute to Family, Creativity, and the Power of Bonding
          Through Books:
        </h2>

        <div className="w-full text-white text-base md:text-lg space-y-6 leading-relaxed tracking-tight max-w-4xl mx-auto">
          <p className="italic">
            By Dr. D (Charles Muthui Mumo): <br />
            Ever tried getting your child off the screen and into a storybook
            let alone writing one with you?
          </p>

          <p>
            Rock On is not just a picture book. It’s a family masterpiece, a
            father-daughter collaboration born from real moments, real photos,
            and real love. Created by Dr. D and his daughter, Taji Muthui, this
            charming and colorful journey blends laughter, imagination, and the
            magic of togetherness into every page.
          </p>

          <p>
            What began as a fun experiment turned into a heartfelt legacy. This
            book isn’t about perfection, it’s about presence. It’s about a dad
            who turned screen time into dream time. And in doing so, he gave his
            daughter the tools to express herself, create art, and proudly say:{" "}
            <span className="italic">“I helped make that!”</span>
          </p>

          <p className="italic font-semibold">What you’ll find Inside:</p>

          <p>
            • A vibrant, animated celebration of childhood wonder
            <br />
            • Real family photos turned into captivating storybook art
            <br />
            • Messages of confidence, fun, and family love
            <br />
            • A unique window into the everyday magic between parent and child
            <br />• A motivational reminder that creativity begins at home
          </p>

          <p>
            Rock On is for every parent who’s ever wished their child would look
            up from a screen. It’s for every kid who deserves to see themselves
            as a co-creator, not just a consumer. And it’s for every family that
            believes memories are better when made together.
            <br />
            <span className="font-bold">Why This Book Matters:</span>
          </p>

          <p className="pl-4 border-l-4 border-myred italic">
            “Because bonding doesn’t have to be complicated,
            <br />
            Sometimes, all it takes is a shared idea, a little imagination,
            <br />
            and a whole lot of love.”
          </p>

          <p className="font-semibold italic">
            "Because when a child sees their words and world come to life in a
            book, they don’t just read it. They own it."
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
              ROCK ON
            </span>
          </p>
          <p className="text-center font-medium">
            …So, go ahead grab your copy on today:
            <br />
            "Let this be more than a bedtime story.
            <br />
            Let it be the beginning of your own creative legacy."
          </p>

          {/* Tags Footer */}
          <div className="mt-12 text-[15px] font-medium flex flex-wrap gap-x-4 gap-y-2 tracking-widest leading-snug">
            <span>• Father daughter book</span>
            <span>• Creative parenting book</span>
            <span>• Animated kids book</span>
            <span>• Books that reduce screen time</span>
            <span>• Family bonding stories</span>
            <span>• Children’s picture book with real photos</span>
          </div>

          <div className="mt-6 text-[15px] tracking-wide font-semibold text-right">
            Taji Charles Muthui
          </div>

          <div className="px-6 sm:px-12 lg:px-20 xl:px-28 mt-14 border-t pt-6">
            <div className="text-left">
              <Link href="/detailblog/blog1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold hover:underline leading-snug cursor-pointer text-review">
                  &lt; BEAT YOUR YESTERDAY:
                  <br />
                  A Wake-Up Call for the Dreamers.
                  <br />
                  The Fighters, and the Broken.
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

export default Blog2;
