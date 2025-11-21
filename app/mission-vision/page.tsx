'use client';

import { Target, Award } from 'lucide-react';
import Link from 'next/link';

export default function MissionVisionPage() {
  const missionVisionData = {
    mission:
      'সেহা ফাউন্ডেশন একটি অলাভজনক, অরাজনৈতিক, সেবামূলক বেসরকারি উন্নয়ন সহযোগী প্রতিষ্ঠান হিসেবে সামাজিক শিক্ষা, স্বাস্থ্য ও কৃষি উন্নয়নে নিবেদিত। আমাদের মিশন হলো গ্রামীণ কৃষকদের ন্যায্য মূল্য প্রাপ্তি এবং ভোক্তাদের কাছে নিরাপদ পণ্য সরবরাহ।',
    vision:
      'আমাদের ভিশন হলো স্মার্ট কৃষি উৎপাদনের মাধ্যমে স্মার্ট বাংলাদেশ গড়া। কৃষি বিনিময় কার্যক্রমের ভিত্তিতে ক্যাশলেস বিনিময় প্রচলন এবং সামাজিক ব্যবসা বৃদ্ধির মডেল অনুসরণ করা।',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20 ">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 11px)`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              মিশন ও ভিশন
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              সেহা ফাউন্ডেশনের মূল লক্ষ্য ও দীর্ঘমেয়াদি পরিকল্পনা
            </p>
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
              আমাদের মিশন ও ভিশন
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

          <div
            className="rounded-2xl p-8 mt-12"
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
              আমাদের মূল্যবোধ
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'স্বচ্ছতা',
                  desc: 'আমরা সবসময় স্বচ্ছ ও নিরপেক্ষভাবে কাজ করি',
                },
                {
                  title: 'টেকসইতা',
                  desc: 'পরিবেশ ও সম্প্রদায়ের জন্য টেকসই উন্নয়ন অনুসরণ করি',
                },
                {
                  title: 'সম্প্রদায় সংহতি',
                  desc: 'স্থানীয় সম্প্রদায়ের সাথে সংহতির মাধ্যমে কাজ করি',
                },
                {
                  title: 'নতুন প্রযুক্তি',
                  desc: 'অত্যাধুনিক প্রযুক্তি ব্যবহার করে সেবা প্রসার করি',
                },
                {
                  title: 'নিরপেক্ষতা',
                  desc: 'অরাজনৈতিক ও অলাভজনক প্রতিষ্ঠান হিসেবে কাজ করি',
                },
                {
                  title: 'সহযোগিতা',
                  desc: 'সহযোগিতা ও সংহতির মাধ্যমে কলেক্টিভ প্রগতি সাধন করি',
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: 'rgba(10, 107, 62, 0.05)' }}
                >
                  <h4 className="font-bold mb-2" style={{ color: '#0A6B3E' }}>
                    {value.title}
                  </h4>
                  <p className="text-sm" style={{ color: '#56766B' }}>
                    {value.desc}
                  </p>
                </div>
              ))}
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
            আমাদের মিশন ও ভিশন সম্পর্কে আরও জানুন
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#56766B' }}
          >
            সেহা ফাউন্ডেশনের কার্যক্রম ও প্রভাব সম্পর্কে বিস্তারিত তথ্য পেতে
            আমাদের রিপোর্ট ডাউনলোড করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/seha-foundation/resources"
              className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              রিপোর্ট ডাউনলোড করুন
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
