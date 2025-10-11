import React from "react";
import { Youtube } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of students who are already learning with Sourabh Raina
        </p>
        <a
          href="https://www.youtube.com/@SourabhRaina"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition"
        >
          <Youtube className="w-6 h-6" />
          <span>Subscribe Now</span>
        </a>
      </div>
    </section>
  );
}
