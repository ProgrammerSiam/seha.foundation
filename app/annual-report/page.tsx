'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  TrendingUp,
  Users,
  Leaf,
  Home,
  GraduationCap,
  Heart,
  Award,
  Download,
  BarChart3,
  Target,
  ArrowRight,
} from 'lucide-react';

export default function AnnualReportPage() {
  const financialHighlights = [
    {
      icon: TrendingUp,
      title: 'মোট আয়',
      value: '৳২৫.৫ কোটি',
      change: '+১৫% বৃদ্ধি',
    },
    {
      icon: Users,
      title: 'সদস্য সংখ্যা',
      value: '২৫,০০০+',
      change: '+২,৫০০ নতুন সদস্য',
    },
    {
      icon: Leaf,
      title: 'কৃষি উন্নয়ন',
      value: '১২,৫০০ একর',
      change: '+১,২০০ একর নতুন জমি',
    },
    {
      icon: Home,
      title: 'গৃহ নির্মাণ',
      value: '১,২৫০ টি',
      change: '+১৫০ টি নতুন গৃহ',
    },
  ];

  const programImpact = [
    {
      icon: GraduationCap,
      title: 'শিক্ষা প্রকল্প',
      description: '৫,০০০+ শিশু শিক্ষালাভ করেছেন',
      impact: '৮৫% শিক্ষাগত উন্নতি',
    },
    {
      icon: Heart,
      title: 'স্বাস্থ্য প্রকল্প',
      description: '১০,০০০+ মানুষের স্বাস্থ্যসেবা প্রদান',
      impact: '৪০% শিশু মৃত্যু হার কমেছে',
    },
    {
      icon: Leaf,
      title: 'কৃষি উন্নয়ন',
      description: '৮,০০০+ কৃষক নতুন পদ্ধতি গ্রহণ',
      impact: '৩০% আয় বৃদ্ধি',
    },
    {
      icon: Home,
      title: 'গৃহ নির্মাণ',
      description: '১,২৫০ টি গৃহ নির্মাণ হয়েছে',
      impact: '১,২৫০ পরিবার নিরাপদ থাকছে',
    },
  ];

  const governanceInfo = [
    {
      title: 'বোর্ড অব ডিরেক্টরস',
      members: '১২ জন',
    },
    {
      title: 'নির্বাহী কমিটি',
      members: '৭ জন',
    },
    {
      title: 'অডিট কমিটি',
      members: '৩ জন',
    },
    {
      title: 'সদস্য পরিষদ',
      members: '২৫,০০০+ জন',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 mt-20">
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
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
              style={{ color: '#123427' }}
            >
              বার্ষিক প্রতিবেদন
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
              সেহা ফাউন্ডেশনের ২০২৪-২০২৫ অর্থবছরের বার্ষিক প্রতিবেদন
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#highlights"
                className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                গুরুত্বপূর্ণ তথ্য
              </Link>
              <Link
                href="#download"
                className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                পূর্ণ প্রতিবেদন ডাউনলোড
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Highlights */}
      <div id="highlights" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              অর্থনৈতিক হাইলাইট
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
              ২০২৪-২০২৫ অর্থবছরে আমাদের অর্থনৈতিক অর্জন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
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
                    className="text-xl font-bold mb-2"
                    style={{ color: '#123427' }}
                  >
                    {highlight.title}
                  </h3>
                  <p
                    className="text-2xl font-bold mb-2"
                    style={{ color: '#0A6B3E' }}
                  >
                    {highlight.value}
                  </p>
                  <p className="text-sm" style={{ color: '#56766B' }}>
                    {highlight.change}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Program Impact */}
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
              প্রকল্পের প্রভাব
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
              আমাদের বিভিন্ন প্রকল্পের মাধ্যমে সম্প্রদায়ে সৃষ্ট প্রভাব
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programImpact.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E6E2DA',
                    boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                  }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: '#123427' }}
                      >
                        {program.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: '#56766B' }}
                      >
                        {program.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(10, 107, 62, 0.05)' }}
                  >
                    <h4
                      className="font-bold mb-2 flex items-center gap-2"
                      style={{ color: '#0A6B3E' }}
                    >
                      <Target className="w-4 h-4" />
                      প্রভাব:
                    </h4>
                    <p style={{ color: '#56766B' }}>{program.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Governance Information */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              পরিচালন তথ্য
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
              সেহা ফাউন্ডেশনের পরিচালন গঠন ও সদস্য তথ্য
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceInfo.map((info, index) => (
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
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  {info.title}
                </h3>
                <p className="text-2xl font-bold" style={{ color: '#0A6B3E' }}>
                  {info.members}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Overview */}
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
              অর্থনৈতিক সংক্ষিপ্তসার
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
              ২০২৪-২০২৫ অর্থবছরে আমাদের অর্থনৈতিক কার্যক্রম
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <BarChart3 className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                আয়ের উৎস
              </h3>

              <div className="space-y-4">
                {[
                  {
                    source: 'দাতা সংস্থা',
                    percentage: '৪৫%',
                    amount: '৳১১.৪৮ কোটি',
                  },
                  {
                    source: 'সরকারি অনুদান',
                    percentage: '২৫%',
                    amount: '৳৬.৩৮ কোটি',
                  },
                  {
                    source: 'বেসরকারি অনুদান',
                    percentage: '২০%',
                    amount: '৳৫.১০ কোটি',
                  },
                  {
                    source: 'অন্যান্য',
                    percentage: '১০%',
                    amount: '৳২.৫৪ কোটি',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: '#123427' }}>{item.source}</span>
                      <span style={{ color: '#56766B' }}>
                        {item.percentage} ({item.amount})
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: '#E6E2DA' }}
                    >
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: item.percentage,
                          background:
                            'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Target className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                ব্যয়ের খাত
              </h3>

              <div className="space-y-4">
                {[
                  {
                    category: 'প্রকল্প বাস্তবায়ন',
                    percentage: '৬০%',
                    amount: '৳১৫.৩০ কোটি',
                  },
                  {
                    category: 'প্রশাসনিক খরচ',
                    percentage: '২০%',
                    amount: '৳৫.১০ কোটি',
                  },
                  {
                    category: 'গবেষণা ও উন্নয়ন',
                    percentage: '১০%',
                    amount: '৳২.৫৫ কোটি',
                  },
                  {
                    category: 'অন্যান্য',
                    percentage: '১০%',
                    amount: '৳২.৫৫ কোটি',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: '#123427' }}>{item.category}</span>
                      <span style={{ color: '#56766B' }}>
                        {item.percentage} ({item.amount})
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: '#E6E2DA' }}
                    >
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: item.percentage,
                          background:
                            'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div id="download" className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 font-serif"
            style={{ color: '#123427' }}
          >
            পূর্ণ বার্ষিক প্রতিবেদন
          </h2>

          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{
              background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
            }}
          ></div>

          <p
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: '#56766B' }}
          >
            ২০২৪-২০২৫ অর্থবছরের সম্পূর্ণ বার্ষিক প্রতিবেদন ডাউনলোড করুন
          </p>

          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl p-8 mb-8"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                  }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-left flex-grow">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: '#123427' }}
                  >
                    সেহা ফাউন্ডেশনের ২০২৪-২০২৫ বার্ষিক প্রতিবেদন
                  </h3>
                  <p className="mb-2" style={{ color: '#56766B' }}>
                    পূর্ণ প্রতিবেদন (PDF, ১২ এমবি)
                  </p>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" style={{ color: '#F59E0B' }} />
                    <span style={{ color: '#56766B' }}>২০২৪-২০২৫</span>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Download className="w-5 h-5" />
                  ডাউনলোড
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'নিরীক্ষা প্রতিবেদন', size: '২.৫ এমবি' },
                { title: 'আর্থিক বিবরণী', size: '১.৮ এমবি' },
                { title: 'প্রকল্প মূল্যায়ন', size: '৩.২ এমবি' },
              ].map((doc, index) => (
                <div
                  key={index}
                  className="rounded-xl p-4 flex items-center justify-between"
                  style={{
                    backgroundColor: '#FFF9E6',
                    border: '1px solid #E6E2DA',
                  }}
                >
                  <div>
                    <h4 className="font-bold" style={{ color: '#123427' }}>
                      {doc.title}
                    </h4>
                    <p className="text-sm" style={{ color: '#56766B' }}>
                      {doc.size}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <Download className="w-5 h-5 text-white" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact for Report */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#123427' }}>
            বার্ষিক প্রতিবেদন সম্পর্কে প্রশ্ন?
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#56766B' }}
          >
            আমাদের বার্ষিক প্রতিবেদন সম্পর্কে আরও জানতে বা তথ্য চাইলে যোগাযোগ
            করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/seha-foundation/contact"
              className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              যোগাযোগ করুন
            </Link>
            <Link
              href="/seha-foundation/about"
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              আমাদের সম্পর্কে জানুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
