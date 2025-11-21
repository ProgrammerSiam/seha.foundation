'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Handshake,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  BookOpen,
  Heart,
  Leaf,
  Home,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function VolunteerPage() {
  const volunteerOpportunities = [
    {
      id: 1,
      icon: Leaf,
      title: 'কৃষি উন্নয়ন স্বেচ্ছাসেবক',
      description: 'গ্রামীণ কৃষকদের জন্য প্রশিক্ষণ ও সহায়তা প্রদান',
      timeCommitment: 'সপ্তাহে 2-3 দিন',
      skills: 'কৃষি জ্ঞান, প্রশিক্ষণ দেওয়ার দক্ষতা',
    },
    {
      id: 2,
      icon: GraduationCap,
      title: 'শিক্ষা স্বেচ্ছাসেবক',
      description: 'গ্রামীণ শিশুদের জন্য শিক্ষা ও প্রশিক্ষণ প্রদান',
      timeCommitment: 'সপ্তাহে 3-4 দিন',
      skills: 'শিক্ষাদান, শিশুদের সাথে কাজ করা',
    },
    {
      id: 3,
      icon: Home,
      title: 'সম্প্রদায় উন্নয়ন স্বেচ্ছাসেবক',
      description: 'সম্প্রদায়ের উন্নয়ন কর্মসূচিতে সহায়তা',
      timeCommitment: 'সপ্তাহে 1-2 দিন',
      skills: 'সম্প্রদায় সংগঠন, প্রশাসনিক কাজ',
    },
    {
      id: 4,
      icon: BookOpen,
      title: 'প্রশিক্ষণ প্রদানকারী',
      description: 'বিভিন্ন কর্মসূচিতে প্রশিক্ষণ প্রদান',
      timeCommitment: 'প্রয়োজন অনুযায়ী',
      skills: 'বক্তৃতা, প্রশিক্ষণ প্রদানের দক্ষতা',
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'স্বীকৃতি ও শংসাপত্র',
      description: 'আপনার অবদানের জন্য শংসাপত্র ও স্বীকৃতি',
    },
    {
      icon: BookOpen,
      title: 'প্রশিক্ষণ ও উন্নয়ন',
      description: 'স্বেচ্ছাসেবার জন্য প্রয়োজনীয় প্রশিক্ষণ প্রদান',
    },
    {
      icon: Users,
      title: 'নেটওয়ার্কিং',
      description: 'অন্যান্য স্বেচ্ছাসেবকদের সাথে সম্পর্ক গড়ে তোলা',
    },
    {
      icon: Heart,
      title: 'সামাজিক প্রভাব',
      description: 'গ্রামীণ সম্প্রদায়ে ইতিবাচক পরিবর্তন সৃষ্টি',
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
      title: 'সাক্ষাৎকার',
      description: 'ফিল্ড কর্মকর্তাদের সাথে সাক্ষাৎকার',
    },
    {
      step: 3,
      title: 'প্রশিক্ষণ',
      description: 'প্রয়োজনীয় প্রশিক্ষণ ও ওরিয়েন্টেশন',
    },
    {
      step: 4,
      title: 'নিয়োগ',
      description: 'উপযুক্ত কর্মসূচিতে নিয়োগ ও কাজে লাগা',
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
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
              style={{ color: '#123427' }}
            >
              সেহা ফাউন্ডেশনে স্বেচ্ছাসেবা করুন
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
              সেহা ফাউন্ডেশনে স্বেচ্ছাসেবা করে গ্রামীণ সম্প্রদায়ের উন্নয়নে
              অবদান রাখুন। আপনার সময় ও দক্ষতা দিয়ে টেকসই ভবিষ্যত গড়ে তুলুন।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#opportunities"
                className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                সুযোগগুলি দেখুন
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

      {/* Volunteer Opportunities */}
      <div id="opportunities" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              স্বেচ্ছাসেবার সুযোগ
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
              আমাদের বিভিন্ন কর্মসূচিতে স্বেচ্ছাসেবা করার সুযোগ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerOpportunities.map((opportunity) => {
              const Icon = opportunity.icon;
              return (
                <div
                  key={opportunity.id}
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
                    {opportunity.title}
                  </h3>

                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: '#56766B' }}
                  >
                    {opportunity.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Clock
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: '#0A6B3E' }}
                      />
                      <div>
                        <h4
                          className="text-sm font-bold"
                          style={{ color: '#123427' }}
                        >
                          সময় নিয়োগ:
                        </h4>
                        <p className="text-sm" style={{ color: '#56766B' }}>
                          {opportunity.timeCommitment}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: '#0A6B3E' }}
                      />
                      <div>
                        <h4
                          className="text-sm font-bold"
                          style={{ color: '#123427' }}
                        >
                          প্রয়োজনীয় দক্ষতা:
                        </h4>
                        <p className="text-sm" style={{ color: '#56766B' }}>
                          {opportunity.skills}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="#apply"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                  >
                    আবেদন করুন <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits of Volunteering */}
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
              স্বেচ্ছাসেবার সুবিধাসমূহ
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
              সেহা ফাউন্ডেশনে স্বেচ্ছাসেবা করলে যে সুবিধাগুলো পাবেন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
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
              সেহা ফাউন্ডেশনে স্বেচ্ছাসেবা করতে নিচের ধাপগুলো অনুসরণ করুন
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
              স্বেচ্ছাসেবা সম্পর্কে আরও জানতে আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
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
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                ঠিকানা
              </h3>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                বিনোদপুর, রাজবাড়ী সদর, রাজবাড়ী
              </p>
            </div>

            <div
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
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                ফোন
              </h3>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                01329682702
                <br />
                01329-682700
              </p>
            </div>

            <div
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
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                ইমেইল
              </h3>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                sehafoundation@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now CTA */}
      <div id="apply" className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#123427' }}>
            এখনই স্বেচ্ছাসেবা করতে আবেদন করুন
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
