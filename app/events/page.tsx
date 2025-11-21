'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Phone,
  Mail,
  Download,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { eventsMetadata } from '../metadata/events-metadata';

export const metadata = eventsMetadata;

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'গ্রামীণ কৃষি উন্নয়ন সম্মেলন',
      date: '১৫ নভেম্বর, ২০২৫',
      time: 'সকাল ১০:০০ - বিকাল ৪:০০',
      location: 'রাজবাড়ী সদর, রাজবাড়ী',
      description:
        'গ্রামীণ কৃষি উন্নয়নের জন্য নতুন পদ্ধতি ও প্রযুক্তি নিয়ে আলোচনা',
      type: 'সম্মেলন',
    },
    {
      id: 2,
      title: 'সদস্যদের বার্ষিক সভা',
      date: '২২ নভেম্বর, ২০২৫',
      time: 'সকাল ৯:০০ - বিকাল ২:০০',
      location: 'বিনোদপুর, রাজবাড়ী',
      description: 'সেহা ফাউন্ডেশনের বার্ষিক কর্মপ্রণালী ও অর্জন নিয়ে আলোচনা',
      type: 'সভা',
    },
    {
      id: 3,
      title: 'কৃষকদের প্রশিক্ষণ কর্মশালা',
      date: '৩০ নভেম্বর, ২০২৫',
      time: 'সকাল ৮:০০ - বিকাল ৫:০০',
      location: 'মোহনপুর, রাজবাড়ী',
      description: 'নতুন কৃষি পদ্ধতি ও প্রযুক্তি নিয়ে বিস্তারিত প্রশিক্ষণ',
      type: 'কর্মশালা',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'টেকসই কৃষি প্রশিক্ষণ কর্মশালা',
      date: '১০ অক্টোবর, ২০২৫',
      location: 'রাজবাড়ী সদর',
      attendees: '১৫০+ জন কৃষক',
      outcome: '৫০+ জন কৃষক নতুন পদ্ধতি গ্রহণ করেছেন',
    },
    {
      id: 2,
      title: 'গ্রামীণ সম্প্রদায় উন্নয়ন সম্মেলন',
      date: '২৫ সেপ্টেম্বর, ২০২৫',
      location: 'ঢাকা',
      attendees: '২০০+ জন সদস্য ও অতিথি',
      outcome: '৫টি নতুন উন্নয়ন প্রকল্প চালু হয়েছে',
    },
  ];

  const eventTypes = [
    {
      icon: Calendar,
      title: 'সম্মেলন',
      description: 'বিশেষজ্ঞদের সাথে আলোচনা ও বিনিময়',
    },
    {
      icon: Users,
      title: 'সভা',
      description: 'সদস্যদের সাথে যোগাযোগ ও আলোচনা',
    },
    {
      icon: Clock,
      title: 'কর্মশালা',
      description: 'ব্যবহারিক প্রশিক্ষণ ও দক্ষতা উন্নয়ন',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <div
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                }}
              >
                <Calendar className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
              style={{ color: '#123427' }}
            >
              ইভেন্ট ও সংবাদ
            </h1>

            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>

            <p
              className="text-xl max-w-3xl mx-auto mb-8"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের আয়োজিত ইভেন্ট, সম্মেলন ও কর্মশালাগুলির তথ্য এবং
              সাম্প্রতিক সংবাদ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#upcoming"
                className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                আসন্ন ইভেন্টগুলি
              </Link>
              <Link
                href="#past"
                className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                অতীত ইভেন্টগুলি
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Event Types */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              ইভেন্টের ধরন
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              আমরা বিভিন্ন ধরনের ইভেন্ট আয়োজন করি যেগুলো সম্প্রদায় উন্নয়নে
              সাহায্য করে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8 text-center"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E6E2DA',
                    boxShadow:
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: '#123427' }}
                  >
                    {type.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#56766B' }}>
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div
        id="upcoming"
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              আসন্ন ইভেন্টগুলি
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              আমাদের পরবর্তী কিছু ইভেন্টে অংশ নিতে রেজিস্ট্রেশন করুন
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl p-8 transition-all hover:shadow-xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: 'rgba(10, 107, 62, 0.1)',
                      color: '#0A6B3E',
                    }}
                  >
                    {event.type}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.1)',
                      color: '#F59E0B',
                    }}
                  >
                    আসন্ন
                  </span>
                </div>

                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  {event.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar
                      className="w-4 h-4"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: '#0A6B3E' }} />
                    <span style={{ color: '#56766B' }}>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: '#0A6B3E' }} />
                    <span style={{ color: '#56766B' }}>{event.location}</span>
                  </div>
                </div>

                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: '#56766B' }}
                >
                  {event.description}
                </p>

                <button className="w-full bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  রেজিস্ট্রেশন করুন
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Events */}
      <div id="past" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              অতীত ইভেন্টগুলি
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              আমাদের পূর্ববর্তী ইভেন্টগুলির সফলতা ও অর্জন
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#123427' }}
                  >
                    {event.title}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#10B981',
                    }}
                  >
                    সম্পন্ন
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar
                      className="w-4 h-4"
                      style={{ color: '#0A6B3E' }}
                    />
                    <span style={{ color: '#56766B' }}>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: '#0A6B3E' }} />
                    <span style={{ color: '#56766B' }}>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: '#0A6B3E' }} />
                    <span style={{ color: '#56766B' }}>{event.attendees}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-4">
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#0A6B3E' }}
                  />
                  <div>
                    <h4 className="font-bold" style={{ color: '#123427' }}>
                      ফলাফল:
                    </h4>
                    <p style={{ color: '#56766B' }}>{event.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Resources */}
      <div
        className="py-16"
        style={{ backgroundColor: 'rgba(255, 249, 230, 0.9)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              ইভেন্ট সম্পর্কিত রিসোর্স
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              আমাদের ইভেন্টগুলির সম্পর্কে আরও জানতে নিচের রিসোর্সগুলি ডাউনলোড
              করুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'ইভেন্ট ক্যালেন্ডার',
                description: 'সম্পূর্ণ ইভেন্ট ক্যালেন্ডার ডাউনলোড করুন',
                icon: Calendar,
              },
              {
                title: 'প্রেস রিলিজ',
                description: 'আমাদের ইভেন্ট সম্পর্কিত প্রেস রিলিজ',
                icon: Download,
              },
              {
                title: 'ফটো গ্যালারি',
                description: 'ইভেন্টের ফটোগুলি দেখুন ও ডাউনলোড করুন',
                icon: Download,
              },
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-8 text-center"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E6E2DA',
                    boxShadow:
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: '#123427' }}
                  >
                    {resource.title}
                  </h3>
                  <p
                    className="leading-relaxed mb-6"
                    style={{ color: '#56766B' }}
                  >
                    {resource.description}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    ডাউনলোড করুন <Download className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact for Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 font-serif"
              style={{ color: '#123427' }}
            >
              ইভেন্টে অংশ নিতে চান?
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              আমাদের ইভেন্টগুলিতে অংশ নিতে বা আয়োজনে সহায়তা করতে চাইলে যোগাযোগ
              করুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E2DA',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <h3
                className="text-xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Mail className="w-6 h-6" style={{ color: '#0A6B3E' }} />
                ইমেইল
              </h3>
              <p className="text-lg mb-4" style={{ color: '#56766B' }}>
                events@seha.foundation
              </p>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                ইভেন্ট সম্পর্কিত সব তথ্য ইমেইল করুন
              </p>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E6E2DA',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <h3
                className="text-xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#123427' }}
              >
                <Phone className="w-6 h-6" style={{ color: '#0A6B3E' }} />
                ফোন
              </h3>
              <p className="text-lg mb-4" style={{ color: '#56766B' }}>
                01329-682702
              </p>
              <p className="leading-relaxed" style={{ color: '#56766B' }}>
                সোমবার থেকে বৃহস্পতিবার, ৯:০০ সকাল - ৫:০০ বিকাল
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
