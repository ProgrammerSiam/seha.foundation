'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Target,
  Package,
  BarChart3,
  Award,
  Users,
  Phone,
  FileText,
  Calendar,
  Download,
  DollarSign,
  Heart,
  Handshake,
  Briefcase,
  Image,
  ArrowRight,
} from 'lucide-react';

export default function SitemapPage() {
  const siteSections = [
    {
      category: 'প্রধান পাতা',
      pages: [
        { name: 'হোম/আমাদের সম্পর্কে', href: '/seha-foundation', icon: Home },
      ],
    },
    {
      category: 'প্রতিষ্ঠান সম্পর্কিত',
      pages: [
        {
          name: 'আমাদের মিশন ও ভিশন',
          href: '/seha-foundation/mission-vision',
          icon: Target,
        },
        {
          name: 'আমাদের প্রভাব',
          href: '/seha-foundation/impact',
          icon: BarChart3,
        },
        {
          name: 'কেন সেহা ফাউন্ডেশন',
          href: '/seha-foundation/why-seha',
          icon: Award,
        },
      ],
    },
    {
      category: 'প্রোগ্রাম ও উদ্যোগ',
      pages: [
        {
          name: 'প্রোগ্রাম ও উদ্যোগ',
          href: '/seha-foundation/programs',
          icon: Package,
        },
        {
          name: 'আর্থিক সহায়তা প্রোগ্রাম (FAP)',
          href: '/seha-foundation/fap',
          icon: DollarSign,
        },
      ],
    },
    {
      category: 'অংশ নিন',
      pages: [
        { name: 'অংশ নিন', href: '/seha-foundation/get-involved', icon: Users },
        { name: 'দান করুন', href: '/seha-foundation/donate', icon: Heart },
        {
          name: 'স্বেচ্ছাসেবা',
          href: '/seha-foundation/volunteer',
          icon: Handshake,
        },
        {
          name: 'ক্যারিয়ার',
          href: '/seha-foundation/careers',
          icon: Briefcase,
        },
      ],
    },
    {
      category: 'মিডিয়া ও রিসোর্স',
      pages: [
        { name: 'ইভেন্ট', href: '/seha-foundation/events', icon: Calendar },
        {
          name: 'বার্ষিক প্রতিবেদন',
          href: '/seha-foundation/annual-report',
          icon: FileText,
        },
        { name: 'গ্যালারি', href: '/seha-foundation/gallery', icon: Image },
        { name: 'রিসোর্স', href: '/seha-foundation/resources', icon: FileText },
        { name: 'সংবাদ', href: '/seha-foundation/news', icon: Calendar },
      ],
    },
    {
      category: 'যোগাযোগ',
      pages: [
        { name: 'যোগাযোগ', href: '/seha-foundation/contact', icon: Phone },
      ],
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
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
              style={{ color: '#123427' }}
            >
              সাইটম্যাপ
            </h1>

            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>

            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের ওয়েবসাইটের সমস্ত পাতা এবং বিভাগের সংক্ষিপ্ত
              সারসংক্ষেপ
            </p>
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteSections.map((section, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div
                  className="p-6"
                  style={{
                    background:
                      'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                  }}
                >
                  <h2
                    className="text-xl font-bold"
                    style={{ color: '#FFFFFF' }}
                  >
                    {section.category}
                  </h2>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {section.pages.map((page, pageIndex) => {
                      const Icon = page.icon;
                      return (
                        <li key={pageIndex}>
                          <Link
                            href={page.href}
                            className="flex items-center justify-between p-3 rounded-lg transition-colors group"
                            style={{
                              backgroundColor: 'rgba(255, 249, 230, 0.5)',
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{
                                  background:
                                    'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                                }}
                              >
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <span
                                className="font-medium"
                                style={{ color: '#123427' }}
                              >
                                {page.name}
                              </span>
                            </div>
                            <ArrowRight
                              className="w-5 h-5 transition-transform group-hover:translate-x-1"
                              style={{ color: '#0A6B3E' }}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#123427' }}>
            আরও তথ্য
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
            আমাদের ওয়েবসাইটে আরও অনেক কিছু রয়েছে যা আপনার জন্য উপকারী হতে পারে
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'সাম্প্রতিক সংবাদ',
                description: 'আমাদের সর্বশেষ সংবাদ ও আপডেটগুলি দেখুন',
                link: '/seha-foundation/news',
              },
              {
                title: 'ডাউনলোড রিসোর্স',
                description: 'প্রয়োজনীয় নথিপত্র ও রিসোর্স ডাউনলোড করুন',
                link: '/seha-foundation/resources',
              },
              {
                title: 'যোগাযোগ করুন',
                description: 'আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না',
                link: '/seha-foundation/contact',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#123427' }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: '#56766B' }}
                >
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-green-700 font-semibold hover:underline"
                >
                  দেখুন <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
