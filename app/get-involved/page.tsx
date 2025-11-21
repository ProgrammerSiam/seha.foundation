'use client';

import {
  Handshake,
  Users,
  TrendingUp,
  Heart,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { getInvolvedMetadata } from '../metadata/get-involved-metadata';

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-40">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 11px)`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              অংশ নিন
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              সেহা ফাউন্ডেশনের সাথে যোগ দিয়ে টেকসই উন্নয়নে অবদান রাখুন
            </p>
          </div>
        </div>
      </div>

      {/* Get Involved Options */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              কিভাবে অংশ নিতে পারেন
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
              সেহা ফাউন্ডেশনের কার্যক্রমে বিভিন্নভাবে সহায়তা প্রদান করুন
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: 'সহযোগিতা করুন',
                description:
                  'আর্থিক সহায়তা বা স্বেচ্ছাসেবা প্রদানের মাধ্যমে আমাদের কার্যক্রমে সহায়তা করুন',
                link: '/seha-foundation/donate',
              },
              {
                icon: Users,
                title: 'সদস্য হন',
                description: 'আমাদের সদস্য হয়ে টেকসই কৃষি উন্নয়নে অংশ নিন',
                link: '/seha-foundation/membership',
              },
              {
                icon: TrendingUp,
                title: 'বিনিয়োগ করুন',
                description:
                  'আমাদের কর্মসূচিতে বিনিয়োগের মাধ্যমে টেকসই উন্নয়নে অবদান রাখুন',
                link: '/seha-foundation/invest',
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
                  href={item.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
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
              স্বেচ্ছাসেবা সুযোগ
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
              আপনার দক্ষতা ও সময় দিয়ে সম্প্রদায় উন্নয়নে অবদান রাখুন
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'শিক্ষা ও প্রশিক্ষণ',
                description:
                  'বিভিন্ন প্রশিক্ষণ কার্যক্রমে সদস্যদের দক্ষতা উন্নয়নে সহায়তা করুন',
              },
              {
                icon: Heart,
                title: 'স্বাস্থ্যসেবা',
                description:
                  'সম্প্রদায়ভিত্তিক স্বাস্থ্যসেবা ও প্রশিক্ষণে সহায়তা করুন',
              },
            ].map((item, idx) => (
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
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: '#123427' }}
                >
                  <item.icon className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: '#56766B' }}
                >
                  {item.description}
                </p>
                <Link
                  href="/seha-foundation/volunteer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  স্বেচ্ছাসেবা করুন <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              অংশীজনিত্ব সুযোগ
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
              সেহা ফাউন্ডেশনের সাথে অংশীজন হয়ে টেকসই উন্নয়নে অবদান রাখুন
            </p>
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
              কেন আমাদের সাথে অংশীজন হবেন?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                '২০+ বছরের অভিজ্ঞতা ও প্রমাণিত সাফল্য',
                '৩০% গড় আয় বৃদ্ধি ও ৯৫% সদস্য সন্তুষ্টি',
                'গভীর সম্প্রদায় সংহতি ও টেকসই উন্নয়ন',
                'অনন্য কৃষি বিনিময় মডেল ও ডিজিটাল প্ল্যাটফর্ম',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ArrowRight
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/seha-foundation/partners"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                অংশীজন হন <Handshake className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#123427' }}>
            আজই অংশ নিন
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#56766B' }}
          >
            সেহা ফাউন্ডেশনের কার্যক্রমে সহায়তা প্রদান করে টেকসই উন্নয়নে অবদান
            রাখুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/seha-foundation/donate"
              className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              অনুদান করুন
            </Link>
            <Link
              href="/seha-foundation/volunteer"
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              স্বেচ্ছাসেবা করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
