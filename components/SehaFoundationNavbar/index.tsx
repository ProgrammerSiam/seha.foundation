'use client';
import React, { useState } from 'react';
import Link from 'next/link';
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
  Menu,
  X,
} from 'lucide-react';

export default function SehaFoundationNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Most important navigation items
  const navItems = [
    {
      id: 'home',
      label: 'হোম/আমাদের সম্পর্কে',
      href: '/seha-foundation',
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

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrollY > 50 ? 'shadow-lg' : 'backdrop-blur-md'
      }`}
      style={{
        backgroundColor: scrollY > 50 ? '#FFFFFF' : 'rgba(255, 249, 230, 0.9)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-0 py-2">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-1 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="rounded-xl flex items-center justify-center transform hover:rotate-3 transition-transform">
              <img
                src="/SehaLogo.jpg"
                alt="Seha Foundation Logo"
                className="h-12"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#0A6B3E' }}>
                সেহা ফাউন্ডেশন
              </h1>
              <p style={{ color: '#56766B' }} className="text-xs">
                সামাজিক শিক্ষা স্বাস্থ্য ও কৃষি ফাউন্ডেশন
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                style={{ color: '#56766B' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0A6B3E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#56766B';
                }}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md"
              style={{ color: '#123427' }}
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium flex items-center"
                style={{ color: '#123427' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
