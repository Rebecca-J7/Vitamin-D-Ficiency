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
    <div className="bg-web-purple-1 fixed top-0 z-50 h-14 w-full opacity-75">
      <div className="absolute left-7 top-5 flex flex-row gap-5 font-mono text-base font-semibold">
        <p
          className="text-web-purple-2 hover:text-web-purple-2 cursor-pointer scroll-mt-14"
          onClick={() => scrollToSection("introduction")}
        >
          rebecca jennings
        </p>
        <p
          className="hover:text-web-purple-2 cursor-pointer scroll-mt-14 text-black"
          onClick={() => scrollToSection("about")}
        >
          about
        </p>
        <p
          className="hover:text-web-purple-2 cursor-pointer scroll-mt-14 text-black"
          onClick={() => scrollToSection("skills")}
        >
          skills
        </p>
        <p
          className="hover:text-web-purple-2 cursor-pointer scroll-mt-14 text-black"
          onClick={() => scrollToSection("experience")}
        >
          experience
        </p>
        <p
          className="hover:text-web-purple-2 cursor-pointer scroll-mt-14 text-black"
          onClick={() => scrollToSection("projects")}
        >
          projects
        </p>
        <p
          className="hover:text-web-purple-2 cursor-pointer scroll-mt-14 text-black"
          onClick={() => scrollToSection("gallery")}
        >
          gallery
        </p>
      </div>
    </div>
  );
};

export default Header;
