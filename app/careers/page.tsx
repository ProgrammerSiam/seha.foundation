'use client';

import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Users,
  TrendingUp,
  GraduationCap,
  MapPin,
  Calendar,
  DollarSign,
  Heart,
  Award,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function CareersPage() {
  const careerBenefits = [
    {
      icon: DollarSign,
      title: 'প্রতিযোগিতামূলক বেতন',
      description: 'শিল্পের মান অনুযায়ী প্রতিযোগিতামূলক বেতন ও সুবিধাদি',
    },
    {
      icon: Award,
      title: 'পেশাগত উন্নয়ন',
      description: 'প্রশিক্ষণ ও উন্নয়নের সুযোগ এবং ক্যারিয়ার প্রগতি',
    },
    {
      icon: Heart,
      title: 'সামাজিক প্রভাব',
      description: 'গ্রামীণ সম্প্রদায়ে ইতিবাচক পরিবর্তন সৃষ্টি',
    },
    {
      icon: Users,
      title: 'সহযোগী পরিবেশ',
      description: 'সহযোগী ও সমর্থনমূলক কর্মপরিবেশ',
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: 'কৃষি বিশেষজ্ঞ',
      department: 'কৃষি উন্নয়ন',
      location: 'রাজবাড়ী, বাংলাদেশ',
      type: 'পূর্ণসময়',
      experience: '৩+ বছর',
    },
    {
      id: 2,
      title: 'প্রকল্প ব্যবস্থাপনা কর্মকর্তা',
      department: 'প্রকল্প ব্যবস্থাপনা',
      location: 'ঢাকা, বাংলাদেশ',
      type: 'পূর্ণসময়',
      experience: '৫+ বছর',
    },
    {
      id: 3,
      title: 'আইটি বিশেষজ্ঞ',
      department: 'প্রযুক্তি',
      location: 'ঢাকা, বাংলাদেশ',
      type: 'পূর্ণসময়',
      experience: '২+ বছর',
    },
    {
      id: 4,
      title: 'হিসাবরক্ষণ কর্মকর্তা',
      department: 'অর্থ ও হিসাব',
      location: 'রাজবাড়ী, বাংলাদেশ',
      type: 'পূর্ণসময়',
      experience: '৩+ বছর',
    },
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'আবেদন',
      description: 'অনলাইনে বা ইমেইলের মাধ্যমে আবেদন করুন',
    },
    {
      step: 2,
      title: 'প্রাথমিক স্ক্রিনিং',
      description: 'আমাদের এইচআর টিম আপনার আবেদন পর্যালোচনা করবে',
    },
    {
      step: 3,
      title: 'সাক্ষাৎকার',
      description: 'প্রয়োজনীয় সাক্ষাৎকার ও যাচাই প্রক্রিয়া',
    },
    {
      step: 4,
      title: 'অফার',
      description: 'উপযুক্ত প্রার্থীদের কাজে লওয়া হবে',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <div
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                }}
              >
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
              style={{ color: '#123427' }}
            >
              ক্যারিয়ার সুযোগ
            </h1>

            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>

            <p
              className="text-xl max-w-3xl mx-auto mb-8"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনে কাজ করে গ্রামীণ সম্প্রদায়ের উন্নয়নে অবদান রাখুন।
              আপনার দক্ষতা ও অভিজ্ঞতা দিয়ে টেকসই ভবিষ্যত গড়ে তুলুন।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#positions"
                className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                খোলা অবস্থানগুলি দেখুন
              </Link>
              <Link
                href="#apply"
                className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                এখনই আবেদন করুন
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              কেন আমাদের সাথে কাজ করবেন?
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনে কাজ করে আপনি নিজেকে উন্নত করতে পারবেন এবং সমাজের
              জন্য ইতিবাচক প্রভাব ফেলতে পারবেন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8 text-center"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E6E2DA',
                    boxShadow:
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: '#123427' }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#56766B' }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div
        id="positions"
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              খোলা অবস্থান
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              আমাদের বিভিন্ন বিভাগে চাকরির সুযোগ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="rounded-2xl p-8 transition-all hover:shadow-xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  {position.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Briefcase
                      className="w-4 h-4"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      {position.department}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: '#0A6B3E' }} />
                    <span style={{ color: '#56766B' }}>
                      {position.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar
                      className="w-4 h-4"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>{position.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap
                      className="w-4 h-4"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      {position.experience}
                    </span>
                  </div>
                </div>

                <Link
                  href="#apply"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                >
                  আবেদন করুন <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              আবেদন প্রক্রিয়া
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনে চাকরির জন্য আবেদন করতে নিচের ধাপগুলো অনুসরণ করুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                      color: '#FFFFFF',
                    }}
                  >
                    {step.step}
                  </div>

                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: '#123427' }}
                  >
                    {step.title}
                  </h3>

                  <p className="leading-relaxed" style={{ color: '#56766B' }}>
                    {step.description}
                  </p>
                </div>

                {index < applicationProcess.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full h-0.5"
                    style={{ backgroundColor: '#0A6B3E' }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              যোগাযোগ করুন
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              চাকরি সম্পর্কে আরও জানতে আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E2DA',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <h3
                className="text-xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Mail className="w-6 h-6" style={{ color: '#0A6B3E' }} />
                ইমেইল
              </h3>
              <p className="text-lg mb-4" style={{ color: '#56766B' }}>
                careers@seha.foundation
              </p>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                আপনার জীবনবৃত্তান্ত ও চাকরির আবেদন ইমেইল করুন
              </p>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E2DA',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <h3
                className="text-xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Phone className="w-6 h-6" style={{ color: '#0A6B3E' }} />
                ফোন
              </h3>
              <p className="text-lg mb-4" style={{ color: '#56766B' }}>
                01329-682702
              </p>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                সোমবার থেকে বৃহস্পতিবার, ৯:০০ সকাল - ৫:০০ বিকাল
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now CTA */}
      <div id="apply" className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#123427' }}>
            এখনই চাকরির জন্য আবেদন করুন
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#56766B' }}
          >
            আপনার আবেদন আমাদের এইচআর দল যাচাই করে দ্রুত প্রক্রিয়া করবে
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              অনলাইনে আবেদন করুন
            </Link>
            <Link
              href="/seha-foundation/contact"
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              বিস্তারিত জানুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
