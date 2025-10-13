import React from "react";
import { subjects } from "@/lib/data";

export default function Subjects() {
  return (
    <section id="subjects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Subjects Covered
          </h2>
          <p className="text-xl text-gray-600">
            Complete coverage of Chemistry & Biology for Class 11 & 12
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition"
            >
              <h3 className="text-2xl text-gray-800 font-bold mb-3">
                {subject.name}
              </h3>
              <p className="text-gray-600">{subject.topics}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
