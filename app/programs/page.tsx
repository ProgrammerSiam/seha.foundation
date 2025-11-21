'use client';

import {
  Leaf,
  Users,
  Heart,
  GraduationCap,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function ProgramsPage() {
  // Subsidiary Initiatives data
  const initiatives = [
    {
      name: 'কৃষি বিনিময়',
      description:
        'সেহা ফাউন্ডেশনের অন্যতম কর্মসূচি যা গ্রামীণ কৃষকদের উচ্চ মূল্যের লাভজনক ফসল উৎপাদন ও বাজারজাতকরণের লক্ষ্যে কাজ করে',
      status: 'সক্রিয়',
      link: '/programs/krishi-binimoy',
      category: 'কৃষি উন্নয়ন',
    },
    {
      name: 'ভল্ট ব্যবস্থাপনা',
      description: 'সদস্যদের পণ্য শস্য মজুদ করার বিশেষ সুবিধা প্রদান',
      status: 'সক্রিয়',
      link: '/programs/vault-management',
      category: 'অর্থনৈতিক সেবা',
    },
    {
      name: 'দক্ষতা উন্নয়ন',
      description:
        'বিভিন্ন প্রশিক্ষণ কার্যক্রমের মাধ্যমে সদস্যদের দক্ষতা উন্নয়ন',
      status: 'সক্রিয়',
      link: '/programs/skill-development',
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 11px)`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              প্রোগ্রাম ও উদ্যোগ
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              সেহা ফাউন্ডেশনের অধীনে পরিচালিত বিভিন্ন কর্মসূচি ও উদ্যোগসমূহ
            </p>
          </div>
        </div>
      </div>

      {/* Programs Overview */}
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
              আমাদের কর্মসূচি
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'কৃষি উন্নয়ন', icon: Leaf, count: '১৫+' },
              { title: 'সামাজিক কল্যাণ', icon: Heart, count: '২০+' },
              {
                title: 'শিক্ষা ও প্রশিক্ষণ',
                icon: GraduationCap,
                count: '৫০+',
              },
              { title: 'সম্প্রদায় উন্নয়ন', icon: Users, count: '১০০+' },
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
              কর্মসূচি বিবরণ
            </h3>
            <p
              className="text-lg leading-relaxed text-center mb-6"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের কার্যক্রম বাস্তবায়নের মাধ্যমে আমরা স্মার্ট কৃষি
              উৎপাদনের মাধ্যমে স্মার্ট বাংলাদেশ গড়ার লক্ষ্যে কাজ করে যাচ্ছি।
            </p>
          </div>
        </div>
      </div>

      {/* Subsidiary Initiatives Section */}
      <div className="py-16 bg-white">
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
              "সেহা কৃষি বিনিময়" হলো সেহা ফাউন্ডেশনের একটি অন্যতম কর্মসূচি যা
              গ্রামীণ কৃষকদের উচ্চ মূল্যের লাভজনক ফসল উৎপাদন ও বাজারজাতকরণের
              লক্ষ্যে কাজ করে।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs/krishi-binimoy"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                কৃষি বিনিময় সম্পর্কে আরও জানুন{' '}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/seha-foundation/get-involved"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                অংশীজন হন
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
            আমাদের কর্মসূচিতে অংশ নিন
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
