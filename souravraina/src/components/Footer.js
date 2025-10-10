import React from "react";
import { BookOpen, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Sourabh Raina</h3>
        </div>
        <p className="text-gray-400 mb-6">
          Science Education for CBSE, NEET & JEE
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.youtube.com/@SourabhRaina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 Sourabh Raina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
