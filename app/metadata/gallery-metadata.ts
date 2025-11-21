import { Metadata } from 'next';

export const galleryMetadata: Metadata = {
  title: 'গ্যালারি - সেহা ফাউন্ডেশন',
  description:
    'সেহা ফাউন্ডেশনের গ্যালারিতে আমাদের কার্যক্রম, ইভেন্ট, প্রশিক্ষণ ও সম্প্রদায় উন্নয়ন কার্যক্রমের ছবি ও ভিডিও দেখুন। গ্রামীণ কৃষি ও সামাজিক উন্নয়নে আমাদের প্রভাব ও অর্জন দেখুন।',
  keywords: [
    'সেহা ফাউন্ডেশন গ্যালারি',
    'কৃষি উন্নয়ন',
    'সম্প্রদায় কল্যাণ',
    'প্রশিক্ষণ',
    'গ্রামীণ উন্নয়ন',
    'ছবি',
    'ভিডিও',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.seha.foundation/gallery',
  },
  openGraph: {
    title: 'গ্যালারি - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের গ্যালারিতে আমাদের কার্যক্রম, ইভেন্ট, প্রশিক্ষণ ও সম্প্রদায় উন্নয়ন কার্যক্রমের ছবি ও ভিডিও দেখুন। গ্রামীণ কৃষি ও সামাজিক উন্নয়নে আমাদের প্রভাব ও অর্জন দেখুন।',
    url: 'https://www.seha.foundation/gallery',
    siteName: 'সেহা ফাউন্ডেশন',
    images: [
      {
        url: 'https://www.seha.foundation/gallery-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'গ্যালারি - সেহা ফাউন্ডেশন',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'গ্যালারি - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের গ্যালারিতে আমাদের কার্যক্রম, ইভেন্ট, প্রশিক্ষণ ও সম্প্রদায় উন্নয়ন কার্যক্রমের ছবি ও ভিডিও দেখুন। গ্রামীণ কৃষি ও সামাজিক উন্নয়নে আমাদের প্রভাব ও অর্জন দেখুন।',
    images: ['https://www.seha.foundation/gallery-og-image.jpg'],
  },
};