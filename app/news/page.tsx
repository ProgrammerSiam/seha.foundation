'use client';

import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const newsItems = [
    {
      title:
        'সেহা ফাউন্ডেশন কৃষি বিনিময় প্রোগ্রামের ৫ম বার্ষিক সমাবর্তন অনুষ্ঠিত',
      excerpt:
        'সেহা ফাউন্ডেশন কৃষি বিনিময় প্রোগ্রামের ৫ম বার্ষিক সমাবর্তন ঢাকায় অনুষ্ঠিত হয়েছে। এ উপলক্ষে বিভিন্ন কৃষি উন্নয়ন প্রকল্পের সফলতা উদযাপন করা হয়েছে।',
      date: '২০২৪-০৫-১৫',
      author: 'সেহা ফাউন্ডেশন প্রশাসন',
      category: 'ইভেন্ট',
      link: '/seha-foundation/news/krishi-binimoy-5th-anniversary',
    },
    {
      title: 'নতুন কৃষি প্রযুক্তি প্রশিক্ষণ কর্মসূচি শুরু',
      excerpt:
        'সেহা ফাউন্ডেশন নতুন কৃষি প্রযুক্তি প্রশিক্ষণ কর্মসূচি শুরু করেছে। এই কর্মসূচিতে ৫০০+ কৃষক অংশ নিচ্ছেন।',
      date: '২০৪-০৪-২২',
      author: 'সেহা ফাউন্ডেশন প্রশাসন',
      category: 'সংবাদ',
      link: '/seha-foundation/news/new-agriculture-training-program',
    },
    {
      title: 'সেহা ফাউন্ডেশন ২০২৩ সালের আর্থিক স্টেটমেন্ট প্রকাশিত',
      excerpt:
        'সেহা ফাউন্ডেশন ২০২৩ সালের আর্থিক স্টেটমেন্ট প্রকাশ করেছে। এতে ফাউন্ডেশনের সব আয়-ব্যয়ের বিস্তারিত তথ্য রয়েছে।',
      date: '২০২৪-০৩-১০',
      author: 'সেহা ফাউন্ডেশন প্রশাসন',
      category: 'সংবাদ',
      link: '/seha-foundation/news/financial-statement-2023',
    },
    {
      title: 'গ্রামীণ মহিলা ক্ষমতায়ন প্রোগ্রামের সফলতা',
      excerpt:
        'সেহা ফাউন্ডেশনের গ্রামীণ মহিলা ক্ষমতায়ন প্রোগ্রামে ১০০০+ মহিলা অংশ নিয়েছেন এবং ৮০% মহিলা আর্থিকভাবে স্বাচ্ছন্দ্য লাভ করেছেন।',
      date: '২০২৪-০২-২৮',
      author: 'সেহা ফাউন্ডেশন প্রশাসন',
      category: 'সংবাদ',
      link: '/seha-foundation/news/women-empowerment-program-success',
    },
  ];

  const upcomingEvents = [
    {
      title: 'কৃষি প্রযুক্তি সেমিনার',
      description: 'আধুনিক কৃষি প্রযুক্তি সম্পর্কে বিস্তারিত আলোচনা',
      date: '২০২৪-০৬-১৫',
      time: 'সকাল ১০:০০ থেকে বিকেল ৪:০০',
      location: 'ঢাকা কৃষি বিশ্ববিদ্যালয়',
      link: '/seha-foundation/events/agriculture-technology-seminar',
    },
    {
      title: 'সেহা ফাউন্ডেশনের ২০২৪ সালের বার্ষিক সভা',
      description: 'ফাউন্ডেশনের বার্ষিক কর্মপরিকল্পনা ও সফলতা উদযাপন',
      date: '২০২৪-০৭-২০',
      time: 'সকাল ৯:০০ থেকে বিকেল ৫:০০',
      location: 'ঢাকা ইন্টারন্যাশনাল কনভেনশন সেন্টার',
      link: '/seha-foundation/events/annual-meeting-2024',
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
              সংবাদ ও ইভেন্ট
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              সেহা ফাউন্ডেশনের সর্বশেষ সংবাদ, ঘটনা ও আসন্ন ইভেন্টসমূহ
            </p>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              সর্বশেষ সংবাদ
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((news, idx) => (
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
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: '#0A6B3E',
                      color: 'white',
                    }}
                  >
                    {news.category}
                  </span>
                  <div
                    className="flex items-center gap-1 text-xs"
                    style={{ color: '#56766B' }}
                  >
                    <Calendar className="w-3 h-3" />
                    <span>{news.date}</span>
                  </div>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#123427' }}
                >
                  {news.title}
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  {news.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <div
                    className="flex items-center gap-1 text-xs"
                    style={{ color: '#56766B' }}
                  >
                    <User className="w-3 h-3" />
                    <span>{news.author}</span>
                  </div>
                  <Link
                    href={news.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: '#0A6B3E' }}
                  >
                    বিস্তারিত পড়ুন <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/seha-foundation/news/archive"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              সব সংবাদ দেখুন <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
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
              আসন্ন ইভেন্ট
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) => (
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
                  className="text-xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  {event.title}
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  {event.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div
                    className="flex items-center gap-2 text-sm"
                    style={{ color: '#56766B' }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-sm"
                    style={{ color: '#56766B' }}
                  >
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-sm"
                    style={{ color: '#56766B' }}
                  >
                    <User className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Link
                  href={event.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  বিস্তারিত জানুন <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
              নিউজলেটার সাবস্ক্রাইব
            </h3>
            <p
              className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের সর্বশেষ সংবাদ, ইভেন্ট ও আপডেট পেতে নিউজলেটারে
              সাবস্ক্রাইব করুন
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
