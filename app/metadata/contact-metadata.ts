import { Metadata } from 'next';

export const contactMetadata: Metadata = {
  title: 'যোগাযোগ - সেহা ফাউন্ডেশন',
  description:
    'সেহা ফাউন্ডেশনের সাথে যোগাযোগ করুন বা আমাদের অফিসে এসে দেখুন। ফোন, ইমেইল, ঠিকানা ও অফিস সময় সম্পর্কে তথ্য পেতে আমাদের যোগাযোগ পৃষ্ঠাটি দেখুন।',
  keywords: [
    'সেহা ফাউন্ডেশন যোগাযোগ',
    'ফোন',
    'ইমেইল',
    'ঠিকানা',
    'অফিস সময়',
    'যোগাযোগ করুন',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.seha.foundation/contact',
  },
  openGraph: {
    title: 'যোগাযোগ - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের সাথে যোগাযোগ করুন বা আমাদের অফিসে এসে দেখুন। ফোন, ইমেইল, ঠিকানা ও অফিস সময় সম্পর্কে তথ্য পেতে আমাদের যোগাযোগ পৃষ্ঠাটি দেখুন।',
    url: 'https://www.seha.foundation/contact',
    siteName: 'সেহা ফাউন্ডেশন',
    images: [
      {
        url: 'https://www.seha.foundation/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'যোগাযোগ - সেহা ফাউন্ডেশন',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'যোগাযোগ - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের সাথে যোগাযোগ করুন বা আমাদের অফিসে এসে দেখুন। ফোন, ইমেইল, ঠিকানা ও অফিস সময় সম্পর্কে তথ্য পেতে আমাদের যোগাযোগ পৃষ্ঠাটি দেখুন।',
    images: ['https://www.seha.foundation/contact-og-image.jpg'],
  },
};