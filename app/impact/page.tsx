'use client';

import {
  Leaf,
  Users,
  Heart,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { impactMetadata } from '../metadata/impact-metadata';

export default function ImpactPage() {
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
    { value: '৯৫%', label: 'সদস্য সন্তুষ্টি', icon: CheckCircle },
    { value: '২০০+', label: 'টি প্রশিক্ষণ কর্মসূচি', icon: Users },
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
              আমাদের প্রভাব
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              সেহা ফাউন্ডেশনের কার্যক্রমের মাধ্যমে সৃষ্টি হওয়া পরিমাপযোগ্য
              ফলাফল ও অর্জন
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
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
              আমাদের অর্জন
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
                  href="/seha-foundation/reports"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  বিস্তারিত রিপোর্ট দেখুন <ArrowRight className="w-4 h-4" />
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

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#123427' }}>
            আমাদের প্রভাব সম্পর্কে আরও জানুন
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#56766B' }}
          >
            সেহা ফাউন্ডেশনের বার্ষিক রিপোর্ট ও প্রভাব নথি ডাউনলোড করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/seha-foundation/reports"
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
