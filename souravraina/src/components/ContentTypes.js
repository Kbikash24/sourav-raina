import React from "react";
import { TrendingUp, BookOpen, FileText, Award } from "lucide-react";
import { contentTypes } from "@/lib/data";

const iconMap = {
  TrendingUp: TrendingUp,
  BookOpen: BookOpen,
  FileText: FileText,
  Award: Award,
};

export default function ContentTypes() {
  return (
    <section id="content" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive content designed for exam success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentTypes.map((type, index) => {
            const Icon = iconMap[type.iconName];

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-gray-800 font-bold mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
