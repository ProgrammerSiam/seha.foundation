import { Metadata } from 'next';

export const newsMetadata: Metadata = {
  title: 'খবর - সেহা ফাউন্ডেশন',
  description:
    'সেহা ফাউন্ডেশনের সর্বশেষ খবর, আপডেট ও প্রকাশনা সম্পর্কে জানুন। কৃষি উন্নয়ন, সম্প্রদায় কল্যাণ, প্রশিক্ষণ ও অন্যান্য কার্যক্রম সম্পর্কে আপনি প্রথম জানতে পারবেন।',
  keywords: [
    'সেহা ফাউন্ডেশন খবর',
    'কৃষি উন্নয়ন',
    'সম্প্রদায় কল্যাণ',
    'প্রশিক্ষণ',
    'গ্রামীণ উন্নয়ন',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.seha.foundation/news',
  },
  openGraph: {
    title: 'খবর - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের সর্বশেষ খবর, আপডেট ও প্রকাশনা সম্পর্কে জানুন। কৃষি উন্নয়ন, সম্প্রদায় কল্যাণ, প্রশিক্ষণ ও অন্যান্য কার্যক্রম সম্পর্কে আপনি প্রথম জানতে পারবেন।',
    url: 'https://www.seha.foundation/news',
    siteName: 'সেহা ফাউন্ডেশন',
    images: [
      {
        url: 'https://www.seha.foundation/news-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'খবর - সেহা ফাউন্ডেশন',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'খবর - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের সর্বশেষ খবর, আপডেট ও প্রকাশনা সম্পর্কে জানুন। কৃষি উন্নয়ন, সম্প্রদায় কল্যাণ, প্রশিক্ষণ ও অন্যান্য কার্যক্রম সম্পর্কে আপনি প্রথম জানতে পারবেন।',
    images: ['https://www.seha.foundation/news-og-image.jpg'],
  },
};