import { Metadata } from 'next';

export const eventsMetadata: Metadata = {
  title: 'ইভেন্টস - সেহা ফাউন্ডেশন',
  description:
    'সেহা ফাউন্ডেশনের সকল ইভেন্ট ও কর্মসূচি সম্পর্কে জানুন। কৃষি প্রশিক্ষণ, সম্প্রদায় সভা, উৎসব ও অন্যান্য ইভেন্টে অংশ নিয়ে টেকসই উন্নয়নে অবদান রাখুন।',
  keywords: [
    'সেহা ফাউন্ডেশন ইভেন্টস',
    'কৃষি প্রশিক্ষণ',
    'সম্প্রদায় সভা',
    'উৎসব',
    'গ্রামীণ উন্নয়ন',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.seha.foundation/events',
  },
  openGraph: {
    title: 'ইভেন্টস - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের সকল ইভেন্ট ও কর্মসূচি সম্পর্কে জানুন। কৃষি প্রশিক্ষণ, সম্প্রদায় সভা, উৎসব ও অন্যান্য ইভেন্টে অংশ নিয়ে টেকসই উন্নয়নে অবদান রাখুন।',
    url: 'https://www.seha.foundation/events',
    siteName: 'সেহা ফাউন্ডেশন',
    images: [
      {
        url: 'https://www.seha.foundation/events-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ইভেন্টস - সেহা ফাউন্ডেশন',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ইভেন্টস - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের সকল ইভেন্ট ও কর্মসূচি সম্পর্কে জানুন। কৃষি প্রশিক্ষণ, সম্প্রদায় সভা, উৎসব ও অন্যান্য ইভেন্টে অংশ নিয়ে টেকসই উন্নয়নে অবদান রাখুন।',
    images: ['https://www.seha.foundation/events-og-image.jpg'],
  },
};