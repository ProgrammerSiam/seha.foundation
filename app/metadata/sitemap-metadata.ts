import { Metadata } from 'next';

export const sitemapMetadata: Metadata = {
  title: 'সাইটম্যাপ - সেহা ফাউন্ডেশন',
  description:
    'সেহা ফাউন্ডেশনের ওয়েবসাইটের সম্পূর্ণ সাইটম্যাপ। আমাদের সকল পাতা ও বিভাগের সংক্ষিপ্ত সারসংক্ষেপ দেখুন।',
  keywords: [
    'সেহা ফাউন্ডেশন সাইটম্যাপ',
    'ওয়েবসাইট সাইটম্যাপ',
    'পাতা তালিকা',
    'গ্রামীণ উন্নয়ন',
    'কৃষি উন্নয়ন',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.seha.foundation/sitemap',
  },
  openGraph: {
    title: 'সাইটম্যাপ - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের ওয়েবসাইটের সম্পূর্ণ সাইটম্যাপ। আমাদের সকল পাতা ও বিভাগের সংক্ষিপ্ত সারসংক্ষেপ দেখুন।',
    url: 'https://www.seha.foundation/sitemap',
    siteName: 'সেহা ফাউন্ডেশন',
    images: [
      {
        url: 'https://www.seha.foundation/sitemap-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'সাইটম্যাপ - সেহা ফাউন্ডেশন',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'সাইটম্যাপ - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের ওয়েবসাইটের সম্পূর্ণ সাইটম্যাপ। আমাদের সকল পাতা ও বিভাগের সংক্ষিপ্ত সারসংক্ষেপ দেখুন।',
    images: ['https://www.seha.foundation/sitemap-og-image.jpg'],
  },
};