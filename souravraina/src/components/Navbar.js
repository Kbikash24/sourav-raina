"use client";

import React, { useState } from "react";
import { BookOpen, Youtube, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sourabh Raina</h1>
              <p className="text-xs text-gray-600">Science Education</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#content"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Content
            </a>
            <a
              href="#subjects"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Subjects
            </a>
            <a
              href="https://www.youtube.com/@SourabhRaina"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition flex items-center space-x-2"
            >
              <Youtube className="w-5 h-5" />
              <span>Subscribe</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a
              href="#about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#content"
              className="block text-gray-700 hover:text-blue-600"
            >
              Content
            </a>
            <a
              href="#subjects"
              className="block text-gray-700 hover:text-blue-600"
            >
              Subjects
            </a>
            <a
              href="https://www.youtube.com/@SourabhRaina"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red-600 text-white px-4 py-2 rounded-full text-center"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
