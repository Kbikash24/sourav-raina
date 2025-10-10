import React from "react";
import { Users, Award, FileText } from "lucide-react";
import { aboutCards } from "@/lib/data";

const iconMap = {
  Users: Users,
  Award: Award,
  FileText: FileText,
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Sourabh Raina
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated science educator specializing in Chemistry and Biology,
            helping students excel in CBSE board exams and competitive tests
            like NEET & JEE.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => {
            const Icon = iconMap[card.iconName];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <Icon
                  className={`w-12 h-12 mb-4 ${
                    index === 1 ? "text-purple-600" : "text-blue-600"
                  }`}
                />
                <h3 className="text-xl text-gray-800  font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
