 "use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); // Hamburger nav
  const [isBooksOpen, setIsBooksOpen] = useState(false); // Books dropdown
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleBooks = () => {
    if (isBooksOpen) {
      setIsBooksOpen(false);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    } else {
      setIsBooksOpen(true);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      closeTimer.current = setTimeout(() => setIsBooksOpen(false), 1 * 60 * 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <footer className="text-gray-600 body-font bg-black py-10 md:py-16">
      <div className="container px-5 md:px-14 lg:px-20 mx-auto flex flex-col items-center">
        {/* Logo + Heading */}
        <a href="/" className="flex items-center space-x-3 mb-6">
          <Image
            src="/assets/logo/Author-Logo.png"
            alt="Logo"
            width={45}
            height={45}
            className="w-11 h-11"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-myred font-custom">
            CHARLES MUTHUI
          </h1>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes size={24} className="text-white" />
            ) : (
              <FaBars size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:justify-center md:space-x-8 text-white font-medium text-lg space-y-4 md:space-y-0 items-center w-full md:w-auto`}
        >
          {/* BOOKS Dropdown */}
          <div
            className="relative flex flex-col items-center w-full md:w-auto"
            onMouseEnter={toggleBooks}
            onClick={toggleBooks}
          >
            <button className="flex items-center text-myred hover:text-onhover">
              BOOKS <FaChevronDown className="ml-1" />
            </button>

            {isBooksOpen && (
              <div className="mt-4 bg-white rounded-lg shadow-xl px-4 py-3 w-full md:w-auto flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base text-black font-semibold z-20">
                <a
                  href="/allbooks/book1"
                  className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
                >
                  BEAT YOUR YESTERDAY
                </a>
                <a
                  href="/allbooks/book2"
                  className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
                >
                  ROCK ON
                </a>
                {/* <a
                  href="/allbooks/book3"
                  className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
                >
                  Wisdom From A Woman
                </a>
                <a
                  href="/allbooks/book4"
                  className="hover:bg-myred hover:text-white px-3 py-2 rounded w-full text-center md:w-auto"
                >
                  Building A Functional Home
                </a> */}
              </div>
            )}
          </div>

          <a href="/author" className="hover:text-myred w-full text-center md:w-auto">
            AUTHOR
          </a>
          <a href="/blog" className="hover:text-myred w-full text-center md:w-auto">
            BLOG
          </a>
          {/* <a href="/contactus" className="hover:text-myred w-full text-center md:w-auto">
            CONTACT US
          </a> */}
        </nav>

        {/* Horizontal line under navigation */}
        <div className="w-full mt-6 md:mt-8">
          <div className="border-b-2 border-myred px-4 md:px-8 lg:px-20" />
        </div>

        {/* Author Bio Section */}
        <div className="w-full mt-8 text-white text-center px-4 md:px-8 lg:px-20">
          <h2 className="text-xl md:text-2xl underline font-semibold text-myred mb-4">
             CHARLES MUTHUI (DR. D)
          </h2>
          <p className="text-base md:text-lg font-medium mb-4">
            WRITER, DREAMER, DAD ON A MISSION..
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Charles Muthui, better known as Dr. D, is the voice behind some of the most powerful real-life storytelling today. From animated picture books created with his daughter (Rock On), to heartfelt letters to men (Say Your Say as a Man), and now a life-shifting personal manifesto (Beat Your Yesterday), Dr. D writes from the soul, and always with purpose.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-4">
            A self-made writer, speaker, and motivator, Charles turns everyday struggles into life lessons that uplift, empower, and challenge you to become your best self. His words don’t just inspire they awaken.
            He lives in the U.S., but his roots, heart, and mission remain grounded in family, faith, and the fearless pursuit of legacy. Because Dr. D doesn’t just write books he writes blueprints for becoming unstoppable, unshaken, and unapologetically you.
          </p>
          {/* <p className="text-sm md:text-base leading-relaxed mt-4">
            He lives in the U.S., but his roots, heart, and mission remain grounded in family, faith, and the fearless pursuit of legacy.
            Because Dr. D doesn’t just write books he writes blueprints for becoming unstoppable, unshaken, and unapologetically you.
          </p> */}
        </div>

        {/* Horizontal line under bio */}
        <div className="w-full mt-8">
          <div className="border-b-2 border-white px-4 md:px-8 lg:px-20" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;