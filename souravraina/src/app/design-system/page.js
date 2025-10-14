"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Youtube,
  TrendingUp,
  Award,
  FileText,
  Users,
  CheckCircle,
  Play,
  Copy,
  Check,
  Palette,
  Type,
  Layout,
  Layers,
  Box,
  Zap,
  Circle,
} from "lucide-react";

export default function DesignSystem() {
  const [copiedColor, setCopiedColor] = useState(null);
  const [activeTab, setActiveTab] = useState("brand");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const ColorSwatch = ({ name, tailwind, hex, id, gradient = false }) => (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className={`h-32 ${tailwind} relative`}>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className="font-bold text-gray-900 mb-1">{name}</p>
            <p className="text-sm text-gray-600 font-mono">{hex}</p>
          </div>
          <button
            onClick={() => copyToClipboard(hex, id)}
            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
          >
            {copiedColor === id ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
          {tailwind}
        </p>
      </div>
    </div>
  );

  const tabs = [
    { id: "brand", label: "Brand", icon: Zap },
    { id: "colors", label: "Colors", icon: Palette },
    { id: "typography", label: "Typography", icon: Type },
    { id: "components", label: "Components", icon: Layout },
    { id: "patterns", label: "Patterns", icon: Layers },
    { id: "spacing", label: "Spacing", icon: Box },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Hero Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm backdrop-blur-lg bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Design System
                </h1>
                <p className="text-sm text-gray-600">
                  Sourabh Raina Education Platform
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              <Circle className="w-4 h-4 fill-white" />
              <span>v1.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-[89px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Brand Identity */}
        {activeTab === "brand" && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Brand Identity
              </h2>
              <p className="text-gray-600">
                Core values and visual identity guidelines
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Empowering students to master science concepts and excel in
                  CBSE, NEET & JEE through clear, accessible education that
                  makes complex topics simple and engaging.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Core Values</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Excellence in Education</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Student Success First</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Clear & Concise Teaching</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Brand Voice
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Educational
                    </h4>
                    <p className="text-gray-600">
                      Clear, instructive, and knowledge-focused
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Approachable
                    </h4>
                    <p className="text-gray-600">
                      Friendly, encouraging, and supportive
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Professional
                    </h4>
                    <p className="text-gray-600">
                      Credible, trustworthy, and expert
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">Motivating</h4>
                    <p className="text-gray-600">
                      Inspiring success and achievement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Logo Variations
                </h3>
                <p className="text-blue-100">
                  Primary brand marks for different contexts
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">Sourabh Raina</p>
                      <p className="text-xs text-gray-600">Science Education</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-semibold">
                    Primary Logo
                  </p>
                </div>
                <div className="bg-gray-900 rounded-2xl p-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Colors */}
        {activeTab === "colors" && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Color System
              </h2>
              <p className="text-gray-600">
                Vibrant and accessible color palette
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Primary Colors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ColorSwatch
                  name="Primary Blue"
                  tailwind="bg-blue-600"
                  hex="#2563EB"
                  id="blue"
                />
                <ColorSwatch
                  name="Primary Purple"
                  tailwind="bg-purple-600"
                  hex="#9333EA"
                  id="purple"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Brand Gradients
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-white font-bold text-xl mb-2">
                      Primary Gradient
                    </p>
                    <p className="text-blue-100 text-sm mb-4">
                      Main brand gradient for buttons and accents
                    </p>
                    <p className="text-white/80 text-sm font-mono bg-black/20 px-3 py-2 rounded-lg">
                      from-blue-600 to-purple-600
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                      Background Gradient
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Subtle gradient for backgrounds and sections
                    </p>
                    <p className="text-gray-700 text-sm font-mono bg-gray-100 px-3 py-2 rounded-lg">
                      from-blue-50 to-purple-50
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Accent Colors
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <ColorSwatch
                  name="YouTube Red"
                  tailwind="bg-red-600"
                  hex="#DC2626"
                  id="red"
                />
                <ColorSwatch
                  name="Success Green"
                  tailwind="bg-green-600"
                  hex="#16A34A"
                  id="green"
                />
                <ColorSwatch
                  name="Light Blue"
                  tailwind="bg-blue-100"
                  hex="#DBEAFE"
                  id="lightblue"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Neutral Palette
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <ColorSwatch
                  name="Gray 900"
                  tailwind="bg-gray-900"
                  hex="#111827"
                  id="gray900"
                />
                <ColorSwatch
                  name="Gray 700"
                  tailwind="bg-gray-700"
                  hex="#374151"
                  id="gray700"
                />
                <ColorSwatch
                  name="Gray 600"
                  tailwind="bg-gray-600"
                  hex="#4B5563"
                  id="gray600"
                />
                <ColorSwatch
                  name="Gray 400"
                  tailwind="bg-gray-400"
                  hex="#9CA3AF"
                  id="gray400"
                />
                <ColorSwatch
                  name="Gray 300"
                  tailwind="bg-gray-300"
                  hex="#D1D5DB"
                  id="gray300"
                />
                <ColorSwatch
                  name="Gray 100"
                  tailwind="bg-gray-100"
                  hex="#F3F4F6"
                  id="gray100"
                />
                <ColorSwatch
                  name="Gray 50"
                  tailwind="bg-gray-50"
                  hex="#F9FAFB"
                  id="gray50"
                />
                <ColorSwatch
                  name="White"
                  tailwind="bg-white border-2 border-gray-200"
                  hex="#FFFFFF"
                  id="white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Typography */}
        {activeTab === "typography" && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Typography
              </h2>
              <p className="text-gray-600">Clear and readable type system</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm font-bold text-blue-600 mb-1">
                      HEADING 1
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      text-5xl md:text-6xl font-bold
                    </p>
                  </div>
                  <div className="bg-blue-50 px-4 py-2 rounded-full">
                    <p className="text-sm font-semibold text-blue-600">
                      Hero Sections
                    </p>
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Master Science.
                  <br />
                  Ace Your Exams.
                </h1>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm font-bold text-blue-600 mb-1">
                      HEADING 2
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      text-4xl font-bold
                    </p>
                  </div>
                  <div className="bg-purple-50 px-4 py-2 rounded-full">
                    <p className="text-sm font-semibold text-purple-600">
                      Section Titles
                    </p>
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  About Sourabh Raina
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <p className="text-sm font-bold text-blue-600 mb-1">
                    HEADING 3
                  </p>
                  <p className="text-xs text-gray-500 font-mono mb-4">
                    text-2xl font-bold
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Expert Teaching
                  </h3>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <p className="text-sm font-bold text-blue-600 mb-1">
                    HEADING 4
                  </p>
                  <p className="text-xs text-gray-500 font-mono mb-4">
                    text-xl font-bold
                  </p>
                  <h4 className="text-xl font-bold text-gray-900">
                    Content Section
                  </h4>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 shadow-lg border border-gray-100">
                <p className="text-sm font-bold text-blue-600 mb-1">
                  BODY LARGE
                </p>
                <p className="text-xs text-gray-500 font-mono mb-4">
                  text-xl text-gray-600
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Expert Chemistry & Biology coaching for CBSE, NEET & JEE
                  preparation. Clear concepts, quick revisions, and proven
                  strategies for exam success.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                <p className="text-sm font-bold text-blue-600 mb-1">
                  BODY REGULAR
                </p>
                <p className="text-xs text-gray-500 font-mono mb-4">
                  text-base text-gray-600
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Comprehensive content designed for exam success with clear
                  concepts and quick revisions. Learn from years of teaching
                  experience with proven methodologies that help students
                  achieve their academic goals.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Components */}
        {activeTab === "components" && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Components
              </h2>
              <p className="text-gray-600">Reusable UI building blocks</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Buttons</h3>
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-bold text-blue-600 mb-4">
                      Primary Button
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      <span>Start Learning</span>
                    </button>
                    <p className="text-xs text-gray-500 mt-3 font-mono bg-gray-50 px-3 py-2 rounded-lg">
                      bg-gradient-to-r from-blue-600 to-purple-600
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-blue-600 mb-4">
                      Secondary Button
                    </p>
                    <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-300 hover:border-blue-600 hover:shadow-lg transition-all">
                      Explore Content
                    </button>
                    <p className="text-xs text-gray-500 mt-3 font-mono bg-gray-50 px-3 py-2 rounded-lg">
                      border-2 border-gray-300
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-blue-600 mb-4">
                      YouTube Button
                    </p>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all hover:shadow-lg flex items-center gap-2">
                      <Youtube className="w-5 h-5" />
                      <span className="font-semibold">Subscribe</span>
                    </button>
                    <p className="text-xs text-gray-500 mt-3 font-mono bg-gray-50 px-3 py-2 rounded-lg">
                      bg-red-600 rounded-full
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-blue-600 mb-4">
                      Text Button
                    </p>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2">
                      <span>Learn More</span>
                      <Play className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-gray-500 mt-3 font-mono bg-gray-50 px-3 py-2 rounded-lg">
                      text-blue-600 font-semibold
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cards</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-bold text-blue-600 mb-4">
                    Standard Card
                  </p>
                  <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                      <Users className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Expert Teaching
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Years of experience in CBSE and competitive exam coaching
                      with proven results.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-600 mb-4">
                    Gradient Card
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl hover:shadow-xl transition-all border border-gray-100">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg">
                      <TrendingUp className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Exam Strategies
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Proven techniques and methods for achieving high marks in
                      board and competitive exams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Badges & Tags
              </h3>
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Verified Educator
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">Top Rated</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">500+ Videos</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full">
                    <Youtube className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Now</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Icons</h3>
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                <p className="text-gray-600 mb-6">
                  Using Lucide React icon library
                </p>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                  {[
                    {
                      icon: BookOpen,
                      name: "BookOpen",
                      color: "text-blue-600",
                    },
                    { icon: Youtube, name: "Youtube", color: "text-red-600" },
                    { icon: Users, name: "Users", color: "text-blue-600" },
                    { icon: Award, name: "Award", color: "text-purple-600" },
                    {
                      icon: FileText,
                      name: "FileText",
                      color: "text-blue-600",
                    },
                    {
                      icon: TrendingUp,
                      name: "TrendingUp",
                      color: "text-green-600",
                    },
                    {
                      icon: CheckCircle,
                      name: "CheckCircle",
                      color: "text-green-600",
                    },
                    { icon: Play, name: "Play", color: "text-blue-600" },
                  ].map(({ icon: Icon, name, color }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center gap-3 group"
                    >
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                        <Icon className={`w-7 h-7 ${color}`} />
                      </div>
                      <p className="text-xs text-gray-600 font-medium text-center">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Patterns */}
        {activeTab === "patterns" && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Design Patterns
              </h2>
              <p className="text-gray-600">
                Common layout and component patterns
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Section Headers
              </h3>
              <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Section Title
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Supporting description text that provides context and
                  additional information about the section
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Statistics Display
              </h3>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { value: "500+", label: "Video Lessons" },
                    { value: "10K+", label: "Students" },
                    { value: "95%", label: "Success Rate" },
                    { value: "4.9★", label: "Rating" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </p>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                CTA Sections
              </h3>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of students who are already learning with
                  Sourabh Raina
                </p>
                <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
                  <Youtube className="w-6 h-6" />
                  <span>Subscribe Now</span>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Content Grid
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Exam Strategies",
                    desc: "Proven techniques for high marks",
                  },
                  {
                    icon: BookOpen,
                    title: "Concept Videos",
                    desc: "Clear explanations of complex topics",
                  },
                  {
                    icon: FileText,
                    title: "Study Materials",
                    desc: "Comprehensive notes and resources",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hero Section Pattern
              </h3>
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-12 shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        Verified Educator
                      </span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      Master Science.
                      <br />
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Ace Your Exams.
                      </span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                      Expert coaching for CBSE, NEET & JEE preparation
                    </p>
                    <div className="flex gap-4">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                        Start Learning
                      </button>
                      <button className="bg-white text-gray-700 px-6 py-3 rounded-full font-semibold border-2 border-gray-300">
                        Explore
                      </button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Spacing */}
        {activeTab === "spacing" && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Spacing System
              </h2>
              <p className="text-gray-600">
                Consistent spacing scale for layouts
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Spacing Scale
              </h3>
              <div className="space-y-6">
                {[
                  {
                    size: "2",
                    px: "8px",
                    name: "Extra Small",
                    use: "Icon gaps, tight spacing",
                  },
                  {
                    size: "3",
                    px: "12px",
                    name: "Small",
                    use: "Button text spacing",
                  },
                  {
                    size: "4",
                    px: "16px",
                    name: "Medium",
                    use: "Card padding, element gaps",
                  },
                  {
                    size: "6",
                    px: "24px",
                    name: "Large",
                    use: "Section spacing",
                  },
                  {
                    size: "8",
                    px: "32px",
                    name: "X-Large",
                    use: "Component spacing",
                  },
                  {
                    size: "12",
                    px: "48px",
                    name: "XX-Large",
                    use: "Large gaps",
                  },
                  {
                    size: "16",
                    px: "64px",
                    name: "XXX-Large",
                    use: "Section padding",
                  },
                  {
                    size: "20",
                    px: "80px",
                    name: "Hero",
                    use: "Major section spacing",
                  },
                ].map((item) => (
                  <div
                    key={item.size}
                    className="flex items-center gap-6 pb-6 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg`}
                        style={{ width: item.px }}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <p className="font-bold text-gray-900 text-lg">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.px} / {item.size * 4}px
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.use}</p>
                      <p className="text-xs text-gray-500 font-mono bg-gray-50 px-3 py-1 rounded inline-block">
                        p-{item.size}, m-{item.size}, gap-{item.size}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Border Radius
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { class: "rounded-lg", label: "Large", size: "8px" },
                  { class: "rounded-xl", label: "X-Large", size: "12px" },
                  { class: "rounded-2xl", label: "2X-Large", size: "16px" },
                  { class: "rounded-3xl", label: "3X-Large", size: "24px" },
                ].map((item) => (
                  <div
                    key={item.class}
                    className="bg-white p-6 shadow-lg border border-gray-100"
                    style={{ borderRadius: item.size }}
                  >
                    <div
                      className={`bg-gradient-to-br from-blue-600 to-purple-600 h-24 ${item.class} flex items-center justify-center text-white font-bold mb-4`}
                    >
                      {item.size}
                    </div>
                    <p className="font-bold text-gray-900 mb-1">{item.label}</p>
                    <p className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
                      {item.class}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <p className="font-bold text-gray-900 mb-3">Full Rounding</p>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-16 w-32 rounded-full flex items-center justify-center text-white font-bold">
                    Pill
                  </div>
                  <p className="text-sm text-gray-600">
                    Used for buttons and badges
                  </p>
                  <p className="text-xs text-gray-500 font-mono bg-gray-50 px-3 py-1 rounded ml-auto">
                    rounded-full
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Shadows</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    class: "shadow-sm",
                    name: "Small",
                    use: "Subtle elevation for borders",
                  },
                  {
                    class: "shadow-lg",
                    name: "Large",
                    use: "Cards and elevated content",
                  },
                  {
                    class: "shadow-2xl",
                    name: "Extra Large",
                    use: "Featured elements and modals",
                  },
                ].map((item) => (
                  <div
                    key={item.class}
                    className={`bg-white p-8 rounded-3xl ${item.class} border border-gray-100`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4"></div>
                    <p className="font-bold text-gray-900 text-lg mb-2">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">{item.use}</p>
                    <p className="text-xs text-gray-500 font-mono bg-gray-50 px-3 py-1 rounded inline-block">
                      {item.class}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Sourabh Raina Design System</h3>
              <p className="text-sm text-gray-400">v1.0 - Education Platform</p>
            </div>
          </div>
          <p className="text-gray-400">
            A comprehensive design system for consistent and accessible user
            experiences
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
