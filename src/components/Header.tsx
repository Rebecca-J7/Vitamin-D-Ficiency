"use client";
import React from "react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = 56;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 z-50 h-14 w-full bg-cyan-400">
      <div className="flex flex-row content-center gap-5 font-afacad text-xl font-semibold">
        <img
          src="icons8-vitamin-70.png"
          className="absolute left-6 top-2 h-10 w-10 object-cover"
        />
        <p
          className="absolute left-20 top-4 cursor-pointer scroll-mt-14 text-blue-950 hover:text-white"
          onClick={() => scrollToSection("welcome")}
        >
          Vitamin D-ficieny
        </p>
      </div>

      <div className="absolute right-10 top-4 flex flex-row content-center gap-4 font-afacad text-xl font-semibold">
        <p
          className="cursor-pointer scroll-mt-14 text-blue-950 hover:text-white"
          onClick={() => scrollToSection("overview")}
        >
          Overview
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-blue-950 hover:text-white"
          onClick={() => scrollToSection("symptoms/causes")}
        >
          Causes & Symptoms
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-blue-950 hover:text-white"
          onClick={() => scrollToSection("treatment")}
        >
          Treatment
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-blue-950 hover:text-white"
          onClick={() => scrollToSection("kit")}
        >
          Vitamin-D-Ficiency Kit
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-blue-950 hover:text-white"
          onClick={() => scrollToSection("activities")}
        >
          Activities
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-blue-950 hover:text-white"
          onClick={() => scrollToSection("resources")}
        >
          Resources
        </p>
      </div>
    </div>
  );
};

export default Header;
