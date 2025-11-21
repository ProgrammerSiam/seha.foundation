'use client';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  MessageCircle,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import { contactMetadata } from '../metadata/contact-metadata';

export const metadata = contactMetadata;

export default function ContactPage() {
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
              যোগাযোগ
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              সেহা ফাউন্ডেশনের সাথে যোগাযোগ করুন বা আমাদের অফিসে এসে দেখুন
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
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
              যোগাযোগের তথ্য
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
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
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                ফোন
              </h3>
              <p className="leading-relaxed mb-2" style={{ color: '#56766B' }}>
                <a href="tel:+8801712345678" className="hover:underline">
                  +880 1712 345678
                </a>
              </p>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                <a href="tel:+8801712345679" className="hover:underline">
                  +880 1712 345679
                </a>
              </p>
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
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                ইমেইল
              </h3>
              <p className="leading-relaxed mb-2" style={{ color: '#56766B' }}>
                <a
                  href="mailto:info@seha.foundation"
                  className="hover:underline"
                >
                  info@seha.foundation
                </a>
              </p>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                <a
                  href="mailto:support@seha.foundation"
                  className="hover:underline"
                >
                  support@seha.foundation
                </a>
              </p>
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
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#123427' }}
              >
                ঠিকানা
              </h3>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                ১২৩ কৃষি ভবন
                <br />
                কৃষি উন্নয়ন এলাকা
                <br />
                ঢাকা-১২০৭, বাংলাদেশ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
              border: '1px solid #E6E2DA',
              boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                }}
              >
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#123427' }}>
                অফিস সময়
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3" style={{ color: '#123427' }}>
                  ঢাকা অফিস
                </h4>
                <ul className="space-y-2" style={{ color: '#56766B' }}>
                  <li className="flex justify-between">
                    <span>রবিবার - বৃহস্পতিবার</span>
                    <span>সকাল ৯:০০ - বিকেল ৫:০০</span>
                  </li>
                  <li className="flex justify-between">
                    <span>শুক্রবার - শনিবার</span>
                    <span>বন্ধ</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3" style={{ color: '#123427' }}>
                  জেলা অফিসসমূহ
                </h4>
                <p className="leading-relaxed" style={{ color: '#56766B' }}>
                  বৃহস্পতিবার সকাল ১০:০০ - বিকেল ৪:০০ (সকল জেলা অফিস)
                  <br />
                  অফিস সময় পরিবর্তন হতে পারে
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
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
              বার্তা পাঠান
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
              আমাদের সাথে যোগাযোগ করুন বা আপনার প্রশ্ন জানান
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                border: '1px solid #E6E2DA',
                boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
              }}
            >
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#123427' }}
                  >
                    নাম
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="আপনার নাম"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#123427' }}
                  >
                    ইমেইল
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="আপনার ইমেইল"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#123427' }}
                  >
                    বিষয়
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="বার্তার বিষয়"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#123427' }}
                  >
                    বার্তা
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <MessageCircle className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="আপনার বার্তা"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  বার্তা পাঠান <Send className="w-4 h-4" />
                </button>
              </form>
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
                className="text-2xl font-bold mb-6"
                style={{ color: '#123427' }}
              >
                আমাদের অফিসে এসে দেখুন
              </h3>
              <div className="rounded-xl overflow-hidden h-80 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.997007774994!2d90.3919325154344!3d23.78063999342875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ba911a0f8b%3A0x9999999999999999!2sDhaka!5e0!3m2!1sen!2sbd!4v1650000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                আমাদের ঢাকা অফিসে এসে সরাসরি আমাদের সাথে দেখা করতে পারেন।
                আগেভাগে ফোন করে নিশ্চিত করে নিন যে আপনার জন্য কোন সভা বা
                অ্যাপয়েন্টমেন্ট নেই।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#123427' }}>
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#56766B' }}
          >
            সেহা ফাউন্ডেশনের সাথে যোগাযোগ করে টেকসই উন্নয়নে অবদান রাখুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+8801712345678"
              className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              কল করুন
            </Link>
            <Link
              href="mailto:info@seha.foundation"
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              ইমেইল করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
