'use client';

import React from 'react';
import Link from 'next/link';
import {
  Heart,
  Users,
  Leaf,
  Home,
  GraduationCap,
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  Award,
} from 'lucide-react';
import { fapMetadata } from '../metadata/fap-metadata';

export default function FinancialAssistanceProgram() {
  const assistanceTypes = [
    {
      id: 1,
      icon: Leaf,
      title: 'কৃষি উন্নয়ন সহায়তা',
      description: 'গ্রামীণ কৃষকদের জন্য বীজ, সার এবং কৃষি সরঞ্জাম সরবরাহ',
      eligibility: 'সদস্যপরিবার, নিম্ন আয়ের পরিবার',
      amount: 'প্রতি পরিবারের জন্য ৳৫,০০০ - ৳২০,০০০',
    },
    {
      id: 2,
      icon: Home,
      title: 'গৃহ নির্মাণ সহায়তা',
      description: 'দারিদ্র্যের কারণে গৃহহীন পরিবারের জন্য গৃহ নির্মাণ',
      eligibility: 'নিবন্ধিত গরিব পরিবার',
      amount: 'প্রতি গৃহের জন্য ৳৫০,০০০',
    },
    {
      id: 3,
      icon: GraduationCap,
      title: 'শিক্ষা সহায়তা',
      description: 'পড়ুয়া ছাত্র-ছাত্রীদের জন্য শিক্ষা বৃত্তি ও সরঞ্জাম',
      eligibility: 'অভিভাবকের মাসিক আয় ৳১৫,০০০ এর কম',
      amount: 'প্রতি ছাত্র-ছাত্রীর জন্য ৳২,০০০ - ৳১০,০০০',
    },
    {
      id: 4,
      icon: Users,
      title: 'মহিলা ক্ষমতায়ন',
      description: 'মহিলাদের জন্য স্বরোজগার প্রকল্প ও প্রশিক্ষণ',
      eligibility: '১৮-৪৫ বছর বয়সী মহিলা',
      amount: 'প্রতি মহিলার জন্য ৳১৫,০০০ - ৳৫০,০০০',
    },
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'আবেদন ফরম পূরণ',
      description: 'অফিস থেকে বা ওয়েবসাইটে আবেদন ফরম সংগ্রহ ও পূরণ',
    },
    {
      step: 2,
      title: 'প্রয়োজনীয় নথিপত্র',
      description: 'জাতীয় পরিচয়পত্র, ঠিকানার প্রমাণ, আয়ের প্রমাণ ইত্যাদি',
    },
    {
      step: 3,
      title: 'সাক্ষাৎকার',
      description: 'ফিল্ড কর্মকর্তাদের সাথে সাক্ষাৎকার ও যাচাই প্রক্রিয়া',
    },
    {
      step: 4,
      title: 'অনুমোদন ও বিতরণ',
      description: 'পর্ষদের অনুমোদন পরবর্তী সহায়তা বিতরণ',
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'ঠিকানা',
      details: 'বিনোদপুর, রাজবাড়ী সদর, রাজবাড়ী',
    },
    {
      icon: Phone,
      title: 'ফোন',
      details: '01329682702, 01329-682700',
    },
    {
      icon: Mail,
      title: 'ইমেইল',
      details: 'sehafoundation@gmail.com',
    },
    {
      icon: Clock,
      title: 'অফিস সময়',
      details: 'রবিবার থেকে বৃহস্পতিবার: ৯:০০ সকাল - ৫:০০ বিকাল',
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
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
              style={{ color: '#123427' }}
            >
              আর্থিক সহায়তা প্রোগ্রাম (FAP)
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
              সেহা ফাউন্ডেশনের আর্থিক সহায়তা প্রোগ্রাম গ্রামীণ সম্প্রদায়গুলিকে
              ক্ষমতায়ন করতে এবং বাংলাদেশে একটি টেকসই ভবিষ্যত গড়ে তুলতে সাহায্য
              করে।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#apply"
                className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                এখনই আবেদন করুন
              </Link>
              <Link
                href="/seha-foundation/contact"
                className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                যোগাযোগ করুন
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              প্রোগ্রামের পরিচিতি
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
              আমাদের আর্থিক সহায়তা প্রোগ্রাম গ্রামীণ সম্প্রদায়ের জন্য বিভিন্ন
              ক্ষেত্রে সহায়তা প্রদান করে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assistanceTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl p-8 transition-all hover:shadow-xl"
                  style={{
                    background:
                      'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                    border: '1px solid #E6E2DA',
                    boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
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
                    {item.title}
                  </h3>

                  <p
                    className="mb-4 leading-relaxed"
                    style={{ color: '#56766B' }}
                  >
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div>
                      <h4
                        className="font-bold text-sm"
                        style={{ color: '#123427' }}
                      >
                        যোগ্যতা:
                      </h4>
                      <p className="text-sm" style={{ color: '#56766B' }}>
                        {item.eligibility}
                      </p>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-sm"
                        style={{ color: '#123427' }}
                      >
                        পরিমাণ:
                      </h4>
                      <p className="text-sm" style={{ color: '#56766B' }}>
                        {item.amount}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Application Process */}
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
              আমাদের আর্থিক সহায়তা পেতে নিচের ধাপগুলো অনুসরণ করুন
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

      {/* Eligibility Criteria */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              যোগ্যতা মানদণ্ড
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
              আমাদের আর্থিক সহায়তা প্রোগ্রামের জন্য নিচের শর্তগুলো প্রযোজ্য
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  <CheckCircle
                    className="w-8 h-8"
                    style={{ color: '#0A6B3E' }}
                  />
                  সাধারণ শর্তাবলী
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      আবেদনকারী অবশ্যই বাংলাদেশের নাগরিক হতে হবে
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      পরিবারের মাসিক আয় ৳২৫,০০০ এর কম হতে হবে
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      আবেদনকারী অবশ্যই সেহা ফাউন্ডেশনের সদস্য হতে হবে
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      পূর্বে কোনো আর্থিক সহায়তা প্রোগ্রাম থেকে সহায়তা গ্রহণ
                      করে থাকলে অবশ্যই তা পরিশোধ করতে হবে
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      আবেদনকারীর নাম কোনো কর্জে হাসানা অপারেশনের ব্ল্যাকলিস্টে
                      থাকা যাবে না
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
                  <Award className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                  নথিপত্রের তালিকা
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileText
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      জাতীয় পরিচয়পত্রের সত্যায়িত কপি
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      পাসপোর্ট সাইজের ছবি ২ কপি
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      ঠিকানার প্রমাণকারী নথি
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      আয়ের প্রমাণকারী নথি
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      পরিবারের সদস্যদের তালিকা
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>
                      আবেদন ফরম (সেহা ফাউন্ডেশন থেকে সংগ্রহযোগ্য)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
              আমাদের আর্থিক সহায়তা প্রোগ্রাম সম্পর্কে আরও জানতে যোগাযোগ করুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-6 text-center"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E6E2DA',
                    boxShadow:
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: '#123427' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#56766B' }}>
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Apply Now CTA */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#123427' }}>
            এখনই আর্থিক সহায়তা প্রোগ্রামে আবেদন করুন
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#56766B' }}
          >
            আপনার আবেদন আমাদের দল যাচাই করে দ্রুত প্রক্রিয়া করবে
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
