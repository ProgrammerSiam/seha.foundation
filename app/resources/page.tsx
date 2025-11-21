'use client';

import { FileText, Download, BookOpen, Image, Video } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'বার্ষিক রিপোর্ট ২০২৩',
      description: 'সেহা ফাউন্ডেশনের ২০২৩ সালের বার্ষিক রিপোর্ট',
      type: 'পিডিএফ',
      size: '২.৫ এমবি',
      link: '/resources/annual-report-2023.pdf',
    },
    {
      title: 'আর্থিক স্টেটমেন্ট ২০২৩',
      description: 'সেহা ফাউন্ডেশনের ২০২৩ সালের আর্থিক স্টেটমেন্ট',
      type: 'পিডিএফ',
      size: '১.৮ এমবি',
      link: '/resources/financial-statement-2023.pdf',
    },
    {
      title: 'কৃষি বিনিময় প্রোগ্রাম রিপোর্ট',
      description: 'কৃষি বিনিময় প্রোগ্রামের বিস্তারিত রিপোর্ট',
      type: 'পিডিএফ',
      size: '৩.২ এমবি',
      link: '/resources/krishi-binimoy-report.pdf',
    },
    {
      title: 'মিডিয়া কিট',
      description: 'সেহা ফাউন্ডেশনের জন্য মিডিয়া কিট ও ব্র্যান্ডিং উপাদান',
      type: 'জিপ',
      size: '১৫ এমবি',
      link: '/resources/media-kit.zip',
    },
    {
      title: 'ফটো গ্যালারি',
      description: 'সেহা ফাউন্ডেশনের কার্যক্রমের ফটো গ্যালারি',
      type: 'ছবি',
      size: '৫০ এমবি',
      link: '/seha-foundation/gallery',
    },
    {
      title: 'ভিডিও গ্যালারি',
      description: 'সেহা ফাউন্ডেশনের কার্যক্রমের ভিডিও গ্যালারি',
      type: 'ভিডিও',
      size: '১০০ এমবি',
      link: '/seha-foundation/videos',
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
              রিসোর্স
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              সেহা ফাউন্ডেশনের রিপোর্ট, প্রকাশনা, মিডিয়া কিট এবং ডাউনলোডযোগ্য
              কন্টেন্ট
            </p>
          </div>
        </div>
      </div>

      {/* Resources Overview */}
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
              আমাদের রিসোর্স
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
              সেহা ফাউন্ডেশনের বিভিন্ন রিপোর্ট, প্রকাশনা ও মিডিয়া উপাদান
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'রিপোর্ট', icon: FileText, count: '১২' },
              { title: 'প্রকাশনা', icon: BookOpen, count: '৮' },
              { title: 'ছবি', icon: Image, count: '১৫০+' },
              { title: 'ভিডিও', icon: Video, count: '২৪' },
            ].map((item, idx) => (
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
                <div
                  className="text-2xl font-bold mb-2"
                  style={{ color: '#0A6B3E' }}
                >
                  {item.count}
                </div>
                <h3 className="font-bold" style={{ color: '#123427' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources List */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              ডাউনলোডযোগ্য রিসোর্স
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
              সেহা ফাউন্ডেশনের বিভিন্ন রিপোর্ট ও উপাদান ডাউনলোড করুন
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
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
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className="px-2 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: '#E6E2DA',
                      color: '#123427',
                    }}
                  >
                    {resource.type}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: '#123427' }}
                >
                  {resource.title}
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  {resource.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs" style={{ color: '#56766B' }}>
                    {resource.size}
                  </span>
                  <Link
                    href={resource.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: '#0A6B3E' }}
                  >
                    ডাউনলোড <Download className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Kit Section */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
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
              মিডিয়া কিট
            </h3>
            <p
              className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের জন্য মিডিয়া কিট ও ব্র্যান্ডিং উপাদান ডাউনলোড
              করুন
            </p>
            <Link
              href="/resources/media-kit.zip"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              মিডিয়া কিট ডাউনলোড করুন <Download className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#123427' }}>
            আরও রিসোর্স প্রয়োজন?
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#56766B' }}
          >
            সেহা ফাউন্ডেশনের বিভিন্ন রিপোর্ট ও উপাদানের জন্য আমাদের সাথে যোগাযোগ
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
              href="/seha-foundation/subscribe"
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              নিউজলেটার সাবস্ক্রাইব করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
