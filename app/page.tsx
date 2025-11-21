'use client';

import { useState } from 'react';
import {
  Target,
  Award,
  Users,
  Leaf,
  Building2,
  GraduationCap,
  Handshake,
  TrendingUp,
  Heart,
  Globe,
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { homeMetadata } from './metadata/home-metadata';

export const metadata = homeMetadata;

export default function SehaFoundationPage() {
  // const [activeTab, setActiveTab] = useState('mission');

  // Mission and Vision data
  const missionVisionData = {
    mission:
      'সেহা ফাউন্ডেশন একটি অলাভজনক, অরাজনৈতিক, সেবামূলক বেসরকারি উন্নয়ন সহযোগী প্রতিষ্ঠান হিসেবে সামাজিক শিক্ষা, স্বাস্থ্য ও কৃষি উন্নয়নে নিবেদিত। আমাদের মিশন হলো গ্রামীণ কৃষকদের ন্যায্য মূল্য প্রাপ্তি এবং ভোক্তাদের কাছে নিরাপদ পণ্য সরবরাহ।',
    vision:
      'আমাদের ভিশন হলো স্মার্ট কৃষি উৎপাদনের মাধ্যমে স্মার্ট বাংলাদেশ গড়া। কৃষি বিনিময় কার্যক্রমের ভিত্তিতে ক্যাশলেস বিনিময় প্রচলন এবং সামাজিক ব্যবসা বৃদ্ধির মডেল অনুসরণ করা।',
  };

  // Stats data
  const stats = [
    { value: '২০+', label: 'বছরের অভিজ্ঞতা' },
    { value: '২৫+', label: 'জেলায় উপস্থিতি' },
    { value: '১০২+', label: 'উপজেলা' },
    { value: '৫০০০+', label: 'সদস্য' },
  ];

  // Impact Metrics data
  const impactMetrics = [
    { value: '১৫০০+', label: 'টন কৃষি উৎপাদন বৃদ্ধি', icon: Leaf },
    { value: '৩০%', label: 'গড় আয় বৃদ্ধি', icon: TrendingUp },
    { value: '৯৫%', label: 'সদস্য সন্তুষ্টি', icon: Award },
    { value: '২০০+', label: 'টি প্রশিক্ষণ কর্মসূচি', icon: GraduationCap },
  ];

  // Impact data
  const impactData = [
    {
      icon: Leaf,
      title: 'কৃষি উন্নয়ন',
      description: 'গ্রামীণ কৃষকদের উৎপাদন বৃদ্ধি ও আয় বৃদ্ধি',
    },
    {
      icon: Users,
      title: 'সম্প্রদায় উন্নয়ন',
      description: 'স্থানীয় সম্প্রদায়ের সামাজিক ও অর্থনৈতিক উন্নয়ন',
    },
    {
      icon: Heart,
      title: 'সামাজিক কল্যাণ',
      description: 'স্বাস্থ্য, শিক্ষা ও কল্যাণ কার্যক্রম',
    },
    {
      icon: TrendingUp,
      title: 'টেকসই উন্নয়ন',
      description: 'পরিবেশ সংরক্ষণ ও টেকসই উন্নয়ন',
    },
  ];

  // Services and Programs data
  const services = [
    {
      title: 'কৃষি উন্নয়ন',
      icon: Leaf,
      description:
        'আধুনিক কৃষি পদ্ধতি ও প্রযুক্তি ব্যবহার করে কৃষি উৎপাদন বৃদ্ধি',
      features: [
        'অর্গানিক কৃষি চাষাবাদ',
        'উচ্চ ফলনশীল বীজ ও সার সরবরাহ',
        'কৃষি প্রযুক্তি প্রশিক্ষণ',
      ],
    },
    {
      title: 'শিক্ষা ও প্রশিক্ষণ',
      icon: GraduationCap,
      description: 'বিভিন্ন দক্ষতা উন্নয়ন প্রশিক্ষণ ও শিক্ষা কার্যক্রম',
      features: [
        'মাশরুম চাষ ও মৌমাছি প্রতিপালন',
        'কম্পিউটার ও নেটওয়ার্কিং প্রশিক্ষণ',
        'সেলাই ও নকশী কাঁথা প্রশিক্ষণ',
      ],
    },
    {
      title: 'সামাজিক কল্যাণ',
      icon: Heart,
      description: 'সম্প্রদায়ের সামাজিক ও অর্থনৈতিক উন্নয়ন',
      features: [
        'গ্রামীণ ব্যাংকিং ও মজুদ সংস্থা',
        'স্বাস্থ্য শিক্ষা ও চিকিৎসা পত্র ও প্রশিক্ষণ',
        'মহিলা ক্ষমতায়ন কার্যক্রম',
      ],
    },
  ];

  // Subsidiary Initiatives data
  const initiatives = [
    {
      name: 'কৃষি বিনিময়',
      description:
        'সেহা ফাউন্ডেশনের অন্যতম কর্মসূচি যা গ্রামীণ কৃষকদের উচ্চ মূল্যের লাভজনক ফসল উৎপাদন ও বাজারজাতকরণের লক্ষ্যে কাজ করে',
      status: 'সক্রিয়',
      link: '/programs',
      category: 'কৃষি উন্নয়ন',
    },
    {
      name: 'ভল্ট ব্যবস্থাপনা',
      description: 'সদস্যদের পণ্য শস্য মজুদ করার বিশেষ সুবিধা প্রদান',
      status: 'সক্রিয়',
      link: '/programs',
      category: 'অর্থনৈতিক সেবা',
    },
    {
      name: 'দক্ষতা উন্নয়ন',
      description:
        'বিভিন্ন প্রশিক্ষণ কার্যক্রমের মাধ্যমে সদস্যদের দক্ষতা উন্নয়ন',
      status: 'সক্রিয়',
      link: '/programs',
      category: 'শিক্ষা ও প্রশিক্ষণ',
    },
    {
      name: 'আসন্ন কর্মসূচি',
      description: 'সেহা ফাউন্ডেশনের নতুন উদ্যোগসমূহ শীঘ্রই চালু হবে',
      status: 'শীঘ্রই আসছে',
      link: '/#',
      category: 'নতুন উদ্যোগ',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-40">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 11px)`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 mt-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                সেহা ফাউন্ডেশন
              </h1>
              <p className="text-xl mb-4">
                সামাজিক শিক্ষা স্বাস্থ্য ও কৃষি ফাউন্ডেশন
              </p>
              <p className="text-lg mb-8 max-w-2xl">
                টেকসই, সম্প্রদায়-চালিত আর্থিক বাস্তুতন্ত্র গড়ে তোলার মাধ্যমে
                গ্রামীণ জীবনমান উন্নয়ন
              </p>
              <div className="mb-8">
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                  }}
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  প্রধান সংস্থা
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/seha-foundation/programs"
                  className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-100 transition-colors"
                >
                  আমাদের কর্মসূচি <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/seha-foundation/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
                >
                  যোগাযোগ
                </Link>
                <Link
                  href="/seha-foundation/get-involved"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  অংশ নিন <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <img
                  src="/SehaLogo.jpg"
                  alt="Seha Foundation Logo"
                  className="w-48 h-48 rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              আমাদের গল্প
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের ২০+ বছরের অভিজ্ঞতা ও প্রতিশ্রুতি
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 text-center transition-all hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#0A6B3E' }}
                >
                  {stat.value}
                </div>
                <div style={{ color: '#56766B' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
              border: '1px solid #E6E2DA',
              boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
            }}
          >
            <h3
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: '#123427' }}
            >
              আমাদের প্রতিশ্রুতি
            </h3>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশন হিসেবে আমরা ২০০৬ সাল থেকে বাংলাদেশের গ্রামীণ
              সম্প্রদায়ের সামাজিক ও অর্থনৈতিক উন্নয়নে নিবেদিত। আমাদের
              প্রতিষ্ঠার মূল লক্ষ্য ছিল গ্রামীণ কৃষকদের ন্যায্য মূল্য প্রাপ্তি
              এবং ভোক্তাদের কাছে নিরাপদ পণ্য সরবরাহ।
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#56766B' }}>
              আমাদের কার্যক্রম বাস্তবায়নের মাধ্যমে আমরা স্মার্ট কৃষি উৎপাদনের
              মাধ্যমে স্মার্ট বাংলাদেশ গড়ার লক্ষ্যে কাজ করে যাচ্ছি। আমাদের কাজ
              শুধু কৃষি উন্নয়ন নয়, বরং সম্প্রদায়ের সামগ্রিক উন্নয়ন ও টেকসই
              ভবিষ্যৎ নির্মাণ।
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              প্রভাব ও অর্জন
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              আমাদের কার্যক্রমের মাধ্যমে সৃষ্টি হওয়া পরিমাপযোগ্য ফলাফল
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 text-center transition-all hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#0A6B3E' }}
                >
                  {metric.value}
                </div>
                <div style={{ color: '#56766B' }}>{metric.label}</div>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
              border: '1px solid #E6E2DA',
              boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
            }}
          >
            <h3
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: '#123427' }}
            >
              সাফল্যের গল্প
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4
                  className="text-xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  কৃষি বিনিময়ের সাফল্য
                </h4>
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: '#56766B' }}
                >
                  কৃষি বিনিময় কর্মসূচির মাধ্যমে আমরা গ্রামীণ কৃষকদের উচ্চ
                  মূল্যের লাভজনক ফসল উৎপাদন ও বাজারজাতকরণের সুযোগ দিয়েছি। এর
                  ফলে ৩০% গড় আয় বৃদ্ধি এবং ১৫০০+ টন কৃষি উৎপাদন বৃদ্ধি সাধিত
                  হয়েছে।
                </p>
                <blockquote
                  className="border-l-4 pl-4 italic"
                  style={{ borderLeftColor: '#0A6B3E', color: '#56766B' }}
                >
                  &quot;সেহা ফাউন্ডেশনের কৃষি বিনিময় কর্মসূচি আমাদের পরিবারের
                  জীবনমান উন্নয়নে অবদান রেখেছে। আমরা এখন আগের চেয়ে ৩ গুণ বেশি
                  আয় করছি।&quot; - আবদুল করিম, নাটোর
                </blockquote>
              </div>
              <div>
                <h4
                  className="text-xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  সম্প্রদায় উন্নয়ন
                </h4>
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: '#56766B' }}
                >
                  আমাদের কার্যক্রমের মাধ্যমে বাংলাদেশের ২৫+ জেলা ও ১০২+ উপজেলায়
                  প্রত্যক্ষ ও পরোক্ষভাবে ৫০০০+ সদস্যের জীবনমান উন্নয়নে অবদান
                  রেখেছি।
                </p>
                <blockquote
                  className="border-l-4 pl-4 italic"
                  style={{ borderLeftColor: '#0A6B3E', color: '#56766B' }}
                >
                  &quot;সেহা ফাউন্ডেশনের প্রশিক্ষণ কর্মসূচি আমাকে নতুন দক্ষতা
                  শিখতে সাহায্য করেছে। আমি এখন মাশরুম চাষ করে পরিবারের জন্য
                  অতিরিক্ত আয় করছি।&quot; - ফাতেমা বেগম, রাজশাহী
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              মিশন ও ভিশন
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8 transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                  }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#123427' }}>
                  আমাদের মিশন
                </h3>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#56766B' }}
              >
                {missionVisionData.mission}
              </p>
            </div>

            <div
              className="rounded-2xl p-8 transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                  }}
                >
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#123427' }}>
                  আমাদের ভিশন
                </h3>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#56766B' }}
              >
                {missionVisionData.vision}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose & Goals Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              উদ্দেশ্য ও লক্ষ্য
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'সামাজিক উন্নয়ন',
                desc: 'গ্রামীণ সম্প্রদায়ের সামাজিক ও অর্থনৈতিক উন্নয়নের মাধ্যমে জীবনমান উন্নয়ন',
              },
              {
                icon: Leaf,
                title: 'কৃষি উন্নয়ন',
                desc: 'আধুনিক কৃষি পদ্ধতি ও প্রযুক্তি ব্যবহার করে কৃষি উৎপাদন বৃদ্ধি',
              },
              {
                icon: GraduationCap,
                title: 'শিক্ষা ও সচেতনতা',
                desc: 'গ্রামীণ সম্প্রদায়ের মধ্যে শিক্ষা ও সচেতনতা সৃষ্টি',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 text-center transition-all hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#56766B' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beneficiary Value Proposition Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              উপকারভোগীদের জন্য মূল্যবোধ
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের সাথে যোগাযোগের মাধ্যমে আপনি যা পাবেন
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8 transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Heart className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                ব্যক্তিগত উপকারভোগীদের জন্য
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>আর্থিক স্বাচ্ছন্দ্য:</strong> উচ্চ মূল্যের ফসল
                    উৎপাদন ও বাজারজাতকরণের মাধ্যমে আয় বৃদ্ধি
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>দক্ষতা উন্নয়ন:</strong> বিভিন্ন প্রশিক্ষণ
                    কার্যক্রমের মাধ্যমে নতুন দক্ষতা অর্জন
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>স্বাস্থ্যসেবা:</strong> সম্প্রদায়ভিত্তিক
                    স্বাস্থ্যসেবা ও প্রশিক্ষণ
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>সামাজিক সম্পৃক্ততা:</strong> সম্প্রদায়ের সাথে সংহতি
                    ও সহযোগিতা
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="rounded-2xl p-8 transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Users className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                সম্প্রদায় ও সংস্থাদের জন্য
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>সামাজিক উন্নয়ন:</strong> স্থানীয় সম্প্রদায়ের
                    সামাজিক ও অর্থনৈতিক উন্নয়ন
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>টেকসই পরিবেশ:</strong> পরিবেশ সংরক্ষণ ও টেকসই
                    উন্নয়ন
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>অংশীজনিত্ব:</strong> সহযোগিতা ও সংহতির মাধ্যমে
                    কলেক্টিভ প্রগতি
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>জ্ঞান ভাগাভাগি:</strong> আধুনিক পদ্ধতি ও প্রযুক্তির
                    মাধ্যমে জ্ঞান অর্জন
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              সেবা ও কর্মসূচি
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশন বিভিন্ন ক্ষেত্রে সেবা প্রদান করে সম্প্রদায়ের
              উন্নয়নে অবদান রাখে
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 transition-all hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#123427' }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: '#0A6B3E' }}
                      />
                      <span style={{ color: '#56766B' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operational Framework Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              কার্যক্রম ও পরিচালনা
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div
                className="rounded-2xl p-8"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: '#123427' }}
                >
                  <Building2 className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                  প্রতিষ্ঠান গঠন
                </h3>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  সেহা ফাউন্ডেশন একটি অলাভজনক, অরাজনৈতিক, সেবামূলক বেসরকারি
                  উন্নয়ন সহযোগী প্রতিষ্ঠান হিসেবে গঠিত। আমাদের পরিচালনা কাঠামো
                  নিম্নরূপ:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      পরিচালনা পর্ষদ - কৌশীলগত সিদ্ধান্ত গ্রহণ
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      নির্বাহী পরিষদ - দৈনিক পরিচালনা
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      কার্যক্রম পরিচালনা - মাঠ পর্যায়ে বাস্তবায়ন
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div
                className="rounded-2xl p-8"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: '#123427' }}
                >
                  <TrendingUp
                    className="w-8 h-8"
                    style={{ color: '#0A6B3E' }}
                  />
                  পদ্ধতি ও প্রযুক্তি
                </h3>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  আমাদের কার্যক্রম বাস্তবায়নের জন্য আমরা অত্যাধুনিক পদ্ধতি ও
                  প্রযুক্তি ব্যবহার করি:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      আধুনিক কৃষি পদ্ধতি ও প্রযুক্তি
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      ডিজিটাল প্ল্যাটফর্ম ও মোবাইল অ্যাপ্লিকেশন
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      ডেটা বিশ্লেষণ ও প্রতিকূল পরিস্থিতি পর্যবেক্ষণ
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Differentiation Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              প্রতিদ্বন্দ্বিতামূলক পার্থক্য
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশন কেন সেরা পছন্দ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8 transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Target className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                অনন্য পদ্ধতি
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>কৃষি বিনিময় মডেল:</strong> ক্যাশলেস বিনিময়
                    প্রচলনের মাধ্যমে কৃষকদের ন্যায্য মূল্য প্রাপ্তি
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>সম্প্রদায়-চালিত পদ্ধতি:</strong> স্থানীয়
                    সম্প্রদায়ের সাথে সংহতির মাধ্যমে টেকসই উন্নয়ন
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>ডিজিটাল প্ল্যাটফর্ম:</strong> মোবাইল অ্যাপ্লিকেশন ও
                    ডিজিটাল সরঞ্জামের মাধ্যমে সেবা প্রসার
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="rounded-2xl p-8 transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Award className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                প্রমাণিত সাফল্য
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>২০+ বছরের অভিজ্ঞতা:</strong> দীর্ঘ অভিজ্ঞতার সাথে
                    গভীর সম্প্রদায় সংহতি
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>৩০% গড় আয় বৃদ্ধি:</strong> পরিমাপযোগ্য ফলাফল ও
                    প্রভাব
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>৯৫% সদস্য সন্তুষ্টি:</strong> উপকারভোগীদের উচ্চ
                    সন্তুষ্টির হার
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-2xl p-8 mt-8 text-center"
            style={{
              background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
              border: '1px solid #E6E2DA',
              boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#123427' }}
            >
              আমাদের মূল্যবোধ
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ backgroundColor: '#0A6B3E', color: 'white' }}
              >
                স্বচ্ছতা
              </span>
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ backgroundColor: '#0A6B3E', color: 'white' }}
              >
                টেকসইতা
              </span>
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ backgroundColor: '#0A6B3E', color: 'white' }}
              >
                সম্প্রদায় সংহতি
              </span>
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ backgroundColor: '#0A6B3E', color: 'white' }}
              >
                নিরপেক্ষতা
              </span>
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ backgroundColor: '#0A6B3E', color: 'white' }}
              >
                নতুন প্রযুক্তি
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              মূল বৈশিষ্ট্য
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'টেকসই উন্নয়ন', icon: Leaf },
              { title: 'সম্প্রদায় কেন্দ্রিক', icon: Users },
              { title: 'প্রযুক্তিবান', icon: Globe },
              { title: 'স্বচ্ছ পরিচালনা', icon: Award },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 text-center transition-all hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold" style={{ color: '#123427' }}>
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Organizational Impact Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              সাংগঠনিক প্রভাব
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের কার্যক্রমের মাধ্যমে সৃষ্টি হওয়া ব্যাপক পরিবর্তন
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactData.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 text-center transition-all hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#123427' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: '#56766B' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8 mt-12"
            style={{
              background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
              border: '1px solid #E6E2DA',
              boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  সামাজিক রূপান্তর
                </h3>
                <p
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  সেহা ফাউন্ডেশনের কার্যক্রমের মাধ্যমে আমরা বাংলাদেশের ২৫+ জেলা
                  ও ১০২+ উপজেলায় প্রত্যক্ষ ও পরোক্ষভাবে ৫০০০+ সদস্যের জীবনমান
                  উন্নয়নে অবদান রেখেছি। আমাদের কাজ শুধু কৃষি উন্নয়ন নয়, বরং
                  সম্প্রদায়ের সামগ্রিক উন্নয়ন ও টেকসই ভবিষ্যৎ নির্মাণ।
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>মহিলা ক্ষমতায়ন</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>শিশু শিক্ষা</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>স্বাস্থ্যসেবা</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>পরিবেশ সংরক্ষণ</span>
                  </div>
                </div>
                <Link
                  href="/impact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/impact-map.jpg"
                    alt="Seha Foundation Impact Map"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p
                  className="text-center mt-4 text-sm"
                  style={{ color: '#56766B' }}
                >
                  সেহা ফাউন্ডেশনের কার্যক্রমের প্রভাব বিস্তার করা এলাকার
                  মানচিত্র
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subsidiary Initiatives Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              কর্মসূচি ও উদ্যোগসমূহ
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের অধীনে পরিচালিত বিভিন্ন কর্মসূচি ও উদ্যোগসমূহ
            </p>
            <div
              className="mt-4 inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: '#E6E2DA', color: '#123427' }}
            >
              <Users className="w-4 h-4 mr-2" />
              মোট কর্মসূচি:{' '}
              {initiatives.filter((i) => i.status !== 'শীঘ্রই আসছে').length}টি
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all hover:shadow-xl ${initiative.name === 'কৃষি বিনিময়' ? 'ring-2 ring-green-500' : initiative.status === 'শীঘ্রই আসছে' ? 'opacity-70' : ''}`}
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <span
                    className="px-2 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor:
                        initiative.status === 'শীঘ্রই আসছে'
                          ? '#6B7280'
                          : '#0A6B3E',
                      color: 'white',
                    }}
                  >
                    {initiative.status}
                  </span>
                  <span
                    className="px-2 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: '#E6E2DA',
                      color: '#123427',
                    }}
                  >
                    {initiative.category}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: '#123427' }}
                >
                  {initiative.name}
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  {initiative.description}
                </p>
                {initiative.status !== 'শীঘ্রই আসছে' ? (
                  <Link
                    href={initiative.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: '#0A6B3E' }}
                  >
                    বিস্তারিত দেখুন <ChevronRight className="w-3 h-3" />
                  </Link>
                ) : (
                  <div className="text-xs text-gray-500">
                    শীঘ্রই বিস্তারিত প্রকাশিত হবে
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Highlight Krishi Binimoy */}
          <div
            className="rounded-2xl p-8 mt-12 text-center ring-2 ring-green-500"
            style={{
              background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
              border: '1px solid #E6E2DA',
              boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
            }}
          >
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ backgroundColor: '#0A6B3E', color: 'white' }}
            >
              অন্যতম কর্মসূচি
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#123427' }}
            >
              কৃষি বিনিময় (উৎপাদন ও বিনিময় বেশ, কৃষি উন্নয়নে আমাদের দেশ)
            </h3>
            <p
              className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
              style={{ color: '#56766B' }}
            >
              &quot;সেহা কৃষি বিনিময়&quot; হলো সেহা ফাউন্ডেশনের একটি অন্যতম
              কর্মসূচি যা গ্রামীণ কৃষকদের উচ্চ মূল্যের লাভজনক ফসল উৎপাদন ও
              বাজারজাতকরণের লক্ষ্যে কাজ করে।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/seha-foundation/programs"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                কৃষি বিনিময় সম্পর্কে আরও জানুন{' '}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/seha-foundation/get-involved"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                অংশীজন হন <Handshake className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Organizational Ecosystem Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              সাংগঠনিক ব্যবস্থা
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের কার্যক্রম ও ভবিষ্যৎ পরিকল্পনা
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="rounded-2xl p-8 text-center transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                  }}
                >
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                বর্তমান কর্মসূচি
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: '#56766B' }}>
                আমাদের বর্তমানে{' '}
                {initiatives.filter((i) => i.status === 'সক্রিয়').length}টি
                সক্রিয় কর্মসূচি চলছে যা গ্রামীণ সম্প্রদায়ের উন্নয়নে অবদান
                রাখছে
              </p>
              <Link
                href="/seha-foundation/programs"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                সব কর্মসূচি দেখুন <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div
              className="rounded-2xl p-8 text-center transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                  }}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                ভবিষ্যৎ পরিকল্পনা
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: '#56766B' }}>
                আমাদের ভবিষ্যতে আরও{' '}
                {initiatives.filter((i) => i.status === 'শীঘ্রই আসছে').length}টি
                নতুন কর্মসূচি চালু হবে যা আরও বেশি সম্প্রদায়কে উপকৃত করবে
              </p>
              <div className="text-sm text-gray-500">
                শীঘ্রই বিস্তারিত প্রকাশিত হবে
              </div>
            </div>

            <div
              className="rounded-2xl p-8 text-center transition-all hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                  }}
                >
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                সাংগঠনিক প্রভাব
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: '#56766B' }}>
                আমাদের কার্যক্রমের মাধ্যমে বাংলাদেশের {stats[1].value} জেলা ও{' '}
                {stats[2].value} উপজেলায় প্রত্যক্ষ ও পরোক্ষভাবে প্রভাব বিস্তার
                করেছে
              </p>
              <Link
                href="/seha-foundation/impact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                প্রভাব দেখুন <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Partner With Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              অংশীজন হন
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের সাথে যোগ দিয়ে টেকসই উন্নয়নে অবদান রাখুন
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: 'সহযোগিতা করুন',
                description:
                  'আর্থিক সহায়তা বা স্বেচ্ছাসেবা প্রদানের মাধ্যমে আমাদের কার্যক্রমে সহায়তা করুন',
              },
              {
                icon: Users,
                title: 'সদস্য হন',
                description: 'আমাদের সদস্য হয়ে টেকসই কৃষি উন্নয়নে অংশ নিন',
              },
              {
                icon: TrendingUp,
                title: 'বিনিয়োগ করুন',
                description:
                  'আমাদের কর্মসূচিতে বিনিয়োগের মাধ্যমে টেকসই উন্নয়নে অবদান রাখুন',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 text-center transition-all hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: '#56766B' }}
                >
                  {item.description}
                </p>
                <Link
                  href="/seha-foundation/get-involved"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              প্রায়শই জিজ্ঞাসিত প্রশ্ন
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশন সম্পর্কে সচরাচর জিজ্ঞাসিত প্রশ্নাবলী
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'সেহা ফাউন্ডেশন কী?',
                answer:
                  'সেহা ফাউন্ডেশন (সামাজিক শিক্ষা স্বাস্থ্য ও কৃষি ফাউন্ডেশন) একটি অলাভজনক, অরাজনৈতিক, সেবামূলক বেসরকারি উন্নয়ন সহযোগী প্রতিষ্ঠান যা সামাজিক শিক্ষা, স্বাস্থ্য ও কৃষি উন্নয়নে নিবেদিত।',
              },
              {
                question: 'সেহা ফাউন্ডেশনের মিশন কী?',
                answer:
                  'আমাদের মিশন হলো গ্রামীণ কৃষকদের ন্যায্য মূল্য প্রাপ্তি এবং ভোক্তাদের কাছে নিরাপদ পণ্য সরবরাহ। আমরা টেকসই, সম্প্রদায়-চালিত আর্থিক বাস্তুতন্ত্র গড়ে তোলার মাধ্যমে গ্রামীণ জীবনমান উন্নয়নে নিবেদিত।',
              },
              {
                question: 'সেহা ফাউন্ডেশনে কিভাবে সদস্য হবেন?',
                answer:
                  'সদস্য হওয়ার জন্য আপনার অবশ্যই বাংলাদেশের নাগরিক হতে হবে। ন্যূনতম ১৮ বছর বয়সের হতে হবে। প্রয়োজনীয় নথিপত্র হিসাবে জাতীয় পরিচয়পত্র, পাসপোর্ট সাইজের ছবি এবং ঠিকানার প্রমান দেখাতে হবে। এছাড়াও ন্যূনতম ২০০ টাকা সদস্যতা ফি প্রদান করতে হবে।',
              },
              {
                question: 'সেহা ফাউন্ডেশনের অন্যতম কর্মসূচি কী?',
                answer:
                  'আমাদের অন্যতম কর্মসূচি হলো কৃষি বিনিময় যা গ্রামীণ কৃষকদের উচ্চ মূল্যের লাভজনক ফসল উৎপাদন ও বাজারজাতকরণের লক্ষ্যে কাজ করে। এছাড়াও আমাদের ভল্ট ব্যবস্থাপনা, দক্ষতা উন্নয়ন ও বিভিন্ন প্রশিক্ষণ কার্যক্রম রয়েছে।',
              },
              {
                question: 'সেহা ফাউন্ডেশনে কিভাবে দান করবেন?',
                answer:
                  'আপনি আমাদের ওয়েবসাইটের মাধ্যমে অনলাইনে দান করতে পারেন অথবা সরাসরি আমাদের অফিসে এসে দান করতে পারেন। আমরা বিভিন্ন পেমেন্ট মেথড সমর্থন করি যেমন ক্রেডিট/ডেবিট কার্ড, মোবাইল ওয়ালেট, ব্যাংক ট্রান্সফার ইত্যাদি।',
              },
              {
                question: 'সেহা ফাউন্ডেশনে স্বেচ্ছাসেবা কিভাবে করবেন?',
                answer:
                  'আপনি আমাদের ওয়েবসাইটের স্বেচ্ছাসেবা বিভাগে গিয়ে আবেদন করতে পারেন অথবা সরাসরি আমাদের অফিসে যোগাযোগ করতে পারেন। আমরা বিভিন্ন ক্ষেত্রে স্বেচ্ছাসেবক প্রয়োজন যেমন শিক্ষা, স্বাস্থ্য, কৃষি উন্নয়ন ইত্যাদি।',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 transition-all hover:shadow-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <h3
                  className="text-lg font-bold mb-3 flex items-start gap-2"
                  style={{ color: '#123427' }}
                >
                  <span className="text-green-700 font-bold">Q:</span>
                  {faq.question}
                </h3>
                <p className="leading-relaxed" style={{ color: '#56766B' }}>
                  <span className="font-bold text-green-700">A:</span>{' '}
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/seha-foundation/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              আরও প্রশ্ন <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
