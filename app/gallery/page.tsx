'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Image,
  Camera,
  Users,
  Leaf,
  Home,
  GraduationCap,
  Heart,
  Award,
  Calendar,
  ArrowLeft,
  ArrowRight,
  X,
  FileText,
} from 'lucide-react';
import { galleryMetadata } from '../metadata/gallery-metadata';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryCategories = [
    {
      id: 'all',
      name: 'সবগুলি',
      icon: Image,
    },
    {
      id: 'events',
      name: 'ইভেন্ট',
      icon: Calendar,
    },
    {
      id: 'programs',
      name: 'প্রোগ্রাম',
      icon: Award,
    },
    {
      id: 'community',
      name: 'সম্প্রদায়',
      icon: Users,
    },
    {
      id: 'activities',
      name: 'কার্যক্রম',
      icon: Camera,
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'সম্প্রদায় সভা',
      category: 'events',
      title: 'গ্রামীণ সম্প্রদায় সভা',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'কৃষি প্রশিক্ষণ',
      category: 'programs',
      title: 'কৃষকদের প্রশিক্ষণ',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'গৃহ নির্মাণ',
      category: 'community',
      title: 'নতুন গৃহ নির্মাণ',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'শিক্ষা প্রকল্প',
      category: 'programs',
      title: 'শিশুদের শিক্ষা',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'স্বাস্থ্য পরিষেবা',
      category: 'community',
      title: 'মোবাইল স্বাস্থ্য পরিষেবা',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'উদ্বোধন অনুষ্ঠান',
      category: 'events',
      title: 'নতুন অফিস উদ্বোধন',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'কৃষি মেলা',
      category: 'activities',
      title: 'বার্ষিক কৃষি মেলা',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'স্বেচ্ছাসেবক',
      category: 'activities',
      title: 'স্বেচ্ছাসেবক দল',
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

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
                <Image className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
              style={{ color: '#123427' }}
            >
              ফটো গ্যালারি
            </h1>

            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
              }}
            ></div>

            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#56766B' }}
            >
              সেহা ফাউন্ডেশনের কার্যক্রম, ইভেন্ট ও প্রকল্পগুলির ফটোগুলি দেখুন
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Categories */}
      <div className="py-8 bg-white sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
            {galleryCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: '#FFF9E6',
                    color: '#123427',
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ArrowLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ArrowRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-white/80">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Gallery */}
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
              ভিডিও গ্যালারি
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
              আমাদের কার্যক্রম ও ইভেন্টগুলির ভিডিও দেখুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'আমাদের প্রতিষ্ঠান সম্পর্কে',
                duration: '৫:৩০ মিনিট',
              },
              {
                id: 2,
                title: 'কৃষি উন্নয়ন প্রকল্প',
                duration: '৮:১৫ মিনিট',
              },
              {
                id: 3,
                title: 'গ্রামীণ সম্প্রদায় সভা',
                duration: '১২:৪৫ মিনিট',
              },
            ].map((video) => (
              <div
                key={video.id}
                className="rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                    }}
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: '#123427' }}
                  >
                    {video.title}
                  </h3>
                  <p
                    className="flex items-center gap-2"
                    style={{ color: '#56766B' }}
                  >
                    <Camera className="w-4 h-4" />
                    {video.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 font-serif"
            style={{ color: '#123427' }}
          >
            ফটো ও ভিডিও ডাউনলোড
          </h2>

          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{
              background: 'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
            }}
          ></div>

          <p
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: '#56766B' }}
          >
            আমাদের মিডিয়া ফাইলগুলি ডাউনলোড করে নিজের ওয়েবসাইট বা প্রকাশনায়
            ব্যবহার করুন
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              ফটো ডাউনলোড
            </Link>
            <Link
              href="#"
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              ভিডিও ডাউনলোড
            </Link>
          </div>
        </div>
      </div>

      {/* Media Kit */}
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
              মিডিয়া কিট
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
              পত্রকার ও মিডিয়া প্রতিনিধিদের জন্য প্রয়োজনীয় তথ্য ও সম্পদ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'প্রেস রিলিজ',
                description: 'আমাদের সর্বশেষ প্রেস রিলিজগুলি',
              },
              {
                icon: Image,
                title: 'লোগো ও ব্র্যান্ডিং',
                description: 'আমাদের লোগো ও ব্র্যান্ডিং উপাদান',
              },
              {
                icon: Users,
                title: 'প্রতিনিধি যোগাযোগ',
                description: 'মিডিয়া প্রতিনিধিদের সাথে যোগাযোগ',
              },
            ].map((item, index) => {
              const Icon = item.icon;
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
                    {item.title}
                  </h3>
                  <p
                    className="leading-relaxed mb-6"
                    style={{ color: '#56766B' }}
                  >
                    {item.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                  >
                    ডাউনলোড করুন <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
