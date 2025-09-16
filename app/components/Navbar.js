"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Oviya"
            width={40}
            height={40}
            className="rounded-full border border-gray-300"
          />
          <h1 className="text-2xl font-bold text-black">Oviya</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-blue-800 font-medium">
            Home
          </a>
          <a href="#about" className="hover:text-blue-800 font-medium">
            About
          </a>
          <a href="#skills" className="hover:text-blue-800 font-medium">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-800 font-medium">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-800 font-medium">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-3 shadow-md">
          <a href="#home" className="hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
