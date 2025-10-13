import React from "react";
import { CheckCircle, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Verified Educator</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Science.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ace Your Exams.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert Chemistry & Biology coaching for CBSE, NEET & JEE
              preparation. Clear concepts, quick revisions, and proven
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.youtube.com/@SourabhRaina"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Learning</span>
              </a>
              <a
                href="#content"
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-300 hover:border-blue-600 transition text-center"
              >
                Explore Content
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@SourabhRaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </a>
              </div>
              <img
                src="/sourabh-raina.webp"
                alt="Channel Preview"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Video Lessons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
