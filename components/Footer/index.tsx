'use client';
import {
  Home,
  Target,
  Package,
  BarChart3,
  Users,
  Phone,
  FileText,
  Heart,
  Handshake,
  Briefcase,
  ChevronRight,
  MapPin,
  Mail,
  MessageCircleMore,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  // Navigation items matching the navbar
  const navItems = [
    {
      id: 'home',
      label: 'হোম/আমাদের সম্পর্কে',
      href: '',
      icon: Home,
    },
    {
      id: 'mission',
      label: 'আমাদের মিশন ও ভিশন',
      href: '/mission-vision',
      icon: Target,
    },
    {
      id: 'programs',
      label: 'প্রোগ্রাম ও উদ্যোগ',
      href: '/programs',
      icon: Package,
    },
    {
      id: 'impact',
      label: 'আমাদের প্রভাব',
      href: '/impact',
      icon: BarChart3,
    },
    {
      id: 'get-involved',
      label: 'অংশ নিন',
      href: '/get-involved',
      icon: Users,
    },
    {
      id: 'donate',
      label: 'দান করুন',
      href: '/donate',
      icon: Heart,
    },
    {
      id: 'contact',
      label: 'যোগাযোগ',
      href: '/contact',
      icon: Phone,
    },
  ];

  // Organize routes into categories
  const quickLinks = navItems.slice(0, 4);
  const services = navItems.slice(4, 6);
  const additionalLinks = navItems.slice(6);

  return (
    <footer
      className="text-white rounded-t-4xl"
      style={{ backgroundColor: '#0A6B3E' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2 space-y-4 block md:hidden">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/seha-foundation"
                className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div
                  className="rounded-xl flex items-center justify-center transform hover:rotate-3 transition-transform"
                  // style={{
                  //   background: "linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)",
                  //   boxShadow: "0 4px 10px rgba(10, 107, 62, 0.15)",
                  // }}
                >
                  {/* <Sprout className="w-8 h-8 text-white" /> */}
                  <img
                    src="./logo1.png"
                    alt="Seha Logo"
                    className=" h-18  rounded-md "
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#FFFFFF' }}
                  >
                    সেহা কৃষি বিনিময়
                  </h3>
                  <p className="text-xs" style={{ color: '#FFF9E6' }}>
                    একটি সেহা ফাউন্ডেশন কর্মসূচি
                  </p>
                </div>
              </Link>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E6E2DA' }}>
              সামাজিক ব্যবসা মডেলে কৃষি উন্নয়নে নিবেদিত একটি সরকার অনুমোদিত
              প্রতিষ্ঠান।
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'linkedin', 'youtube'].map(
                (social, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <span className="text-xs" style={{ color: '#FFFFFF' }}>
                      {social[0].toUpperCase()}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 order-last">
            <h4
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: '#FFFFFF' }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#FFF9E6' }} />
              দ্রুত লিংক
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="transition-colors text-sm flex items-center gap-2"
                    style={{ color: '#E6E2DA' }}
                  >
                    <ChevronRight className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1  order-last">
            <h4
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: '#FFFFFF' }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#FFF9E6' }} />
              সেবাসমূহ
            </h4>
            <ul className="space-y-3">
              {services.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="transition-colors text-sm flex items-center gap-2"
                    style={{ color: '#E6E2DA' }}
                  >
                    <ChevronRight className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div className="lg:col-span-1  order-last">
            <h4
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: '#FFFFFF' }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#FFF9E6' }} />
              আরও লিংক
            </h4>
            <ul className="space-y-3">
              {additionalLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="transition-colors text-sm flex items-center gap-2"
                    style={{ color: '#E6E2DA' }}
                  >
                    <ChevronRight className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1  order-last">
            <h4
              className="text-lg font-bold mb-4 flex items-center gap-2"
              style={{ color: '#FFFFFF' }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#FFF9E6' }} />
              আরও তথ্য
            </h4>
            <ul className="space-y-3">
              {additionalLinks.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="transition-colors text-sm flex items-center gap-2"
                    style={{ color: '#E6E2DA' }}
                  >
                    <ChevronRight className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Information Section */}
          <div className="lg:col-span-2 order-fast">
            <h4
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: '#FFFFFF' }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#FFF9E6' }} />
              যোগাযোগ
            </h4>
            <ul className="space-y-4 text-sm">
              {/* Updated addresses */}
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#FFF9E6' }}
                />
                <span style={{ color: '#E6E2DA' }}>
                  <strong>
                    প্রোগ্রাম অফিস: বিনোদপুর, রাজবাড়ী সদর, রাজবাড়ী
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#FFF9E6' }}
                />
                <span style={{ color: '#E6E2DA' }}>
                  কুষ্টিয়া জেলা কার্যালয়: চিনিকল সড়ক, জগতি-৭০০২, কুষ্টিয়া
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#FFF9E6' }}
                />
                <span style={{ color: '#E6E2DA' }}>
                  সেহা কৃষি বিনিময় জেলা কার্যালয়: বিনোদপুর ডায়াবেটিস হাসপাতাল
                  সংলগ্ন, রাজবাড়ী সদর, রাজবাড়ী
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#FFF9E6' }}
                />
                <span style={{ color: '#E6E2DA' }}>
                  রাজবাড়ী সদর উপজেলা কার্যালয়: কুঠিরহাট বাজার, রাজবাড়ী সদর,
                  রাজবাড়ী
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#FFF9E6' }}
                />
                <span style={{ color: '#E6E2DA' }}>
                  প্রোগ্রাম অফিস: বিনোদপুর, রাজবাড়ী সদর, রাজবাড়ী
                </span>
              </li>

              {/* Phone numbers */}
              <li className="flex items-start gap-3">
                <Phone
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#FFF9E6' }}
                />
                <div style={{ color: '#E6E2DA' }}>
                  <div>০১৩২৯-৬৮২৭০২</div>
                  <div>০১৩২৯-৬৮২৭০৩</div>
                  <div>০১৩২৯-৬৮২৭০০</div>
                </div>
              </li>

              {/* Email addresses */}
              <li className="flex items-start gap-3">
                <Mail
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: '#FFF9E6' }}
                />
                <div style={{ color: '#E6E2DA' }}>
                  <div>sehafoundation@gmail.com</div>
                  <div>sehakrishibinimoy@gmail.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-10 md:mb-0">
            <p
              className="text-sm text-center md:text-left"
              style={{ color: '#E6E2DA' }}
            >
              © {new Date().getFullYear()} সেহা ফাউন্ডেশন - সেহা কৃষি বিনিময়.
              সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/policies"
                className="transition-colors"
                style={{ color: '#E6E2DA' }}
              >
                গোপনীয়তা নীতি
              </Link>
              <Link
                href="/policies"
                className="transition-colors"
                style={{ color: '#E6E2DA' }}
              >
                শর্তাবলী
              </Link>
              <Link
                href="/policies"
                className="transition-colors"
                style={{ color: '#E6E2DA' }}
              >
                রিফান্ড নীতি
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-40"
        // style={{ 
        //   background: "linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)",
        // }}
          style={{ 
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        }}
      >
        <ArrowUp className="w-6 h-6 " />
      </button> */}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8801329682700" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-10 md:w-12 h-10 md:h-12 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-40 animate-pulse"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          animation: 'pulse 2s infinite',
        }}
      >
        <MessageCircleMore className="w-6 h-6" />
      </a>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(37, 211, 102, 0.5);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
          }
        }
      `}</style>
    </footer>
  );
}
