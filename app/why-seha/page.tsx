'use client';

import {
  Target,
  Award,
  Users,
  Leaf,
  TrendingUp,
  CheckCircle,
  Heart,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import { whySehaMetadata } from '../metadata/why-seha-metadata';

export default function WhySehaPage() {
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
              কেন সেহা ফাউন্ডেশন
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              সেহা ফাউন্ডেশন কেন সেরা পছন্দ - আমাদের প্রতিদ্বন্দ্বিতামূলক
              পার্থক্য ও অনন্য মূল্যবোধ
            </p>
          </div>
        </div>
      </div>

      {/* Unique Methodologies Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              অনন্য পদ্ধতি
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
              সেহা ফাউন্ডেশনের অনন্য পদ্ধতি ও নবীন প্রযুক্তি
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
                কৃষি বিনিময় মডেল
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>ক্যাশলেস বিনিময় প্রচলন:</strong> কৃষকদের ন্যায্য
                    মূল্য প্রাপ্তির মাধ্যমে আর্থিক স্বাচ্ছন্দ্য
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>সরাসরি বাজারজাতকরণ:</strong> মাঝবিতে কমিশন ছাড়া
                    সরাসরি ক্রেতা-বিক্রেতার সংযোগ
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
                <Users className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                সম্প্রদায়-চালিত পদ্ধতি
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>স্থানীয় সম্প্রদায়ের সাথে সংহতি:</strong> গভীর
                    সম্প্রদায় সংহতির মাধ্যমে টেকসই উন্নয়ন
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>সহযোগিতা ও সংহতি:</strong> সহযোগিতা ও সংহতির মাধ্যমে
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

      {/* Proven Track Record Section */}
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
              প্রমাণিত সাফল্য
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
              সেহা ফাউন্ডেশনের পরিমাপযোগ্য ফলাফল ও প্রভাব
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
                <Award className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                ২০+ বছরের অভিজ্ঞতা
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>দীর্ঘ অভিজ্ঞতা:</strong> ২০০৬ সাল থেকে গ্রামীণ
                    সম্প্রদায়ের সামাজিক ও অর্থনৈতিক উন্নয়নে নিবেদিত
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>গভীর সম্প্রদায় সংহতি:</strong> দীর্ঘ অভিজ্ঞতার সাথে
                    গভীর সম্প্রদায় সংহতি
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>টেকসই উন্নয়ন:</strong> সম্প্রদায়ের সামগ্রিক
                    উন্নয়ন ও টেকসই ভবিষ্যৎ নির্মাণ
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
                <TrendingUp className="w-8 h-8" style={{ color: '#0A6B3E' }} />
                পরিমাপযোগ্য ফলাফল
              </h3>
              <ul className="space-y-4">
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
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: '#0A6B3E' }}
                  />
                  <span style={{ color: '#56766B' }}>
                    <strong>১৫০০+ টন কৃষি উৎপাদন বৃদ্ধি:</strong> কৃষি উৎপাদনে
                    উল্লেখযোগ্য বৃদ্ধি
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              আমাদের মূল্যবোধ
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
              সেহা ফাউন্ডেশনের মূল মূল্যবোধ ও নীতিমালা
            </p>
          </div>

          <div
            className="rounded-2xl p-8 text-center"
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

      {/* CTA Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#123427' }}>
            সেহা ফাউন্ডেশনের সাথে যোগ দিন
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
              href="/seha-foundation/get-involved"
              className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              অংশীজন হন
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
  );
}
