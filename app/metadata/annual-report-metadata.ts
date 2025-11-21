import { Metadata } from 'next';

export const annualReportMetadata: Metadata = {
  title: 'বার্ষিক প্রতিবেদন - সেহা ফাউন্ডেশন',
  description:
    'সেহা ফাউন্ডেশনের বার্ষিক প্রতিবেদন ডাউনলোড করুন। কৃষি উন্নয়ন, সম্প্রদায় কল্যাণ, প্রশিক্ষণ ও টেকসই উন্নয়ন কার্যক্রমের বার্ষিক প্রভাব, অর্জন ও আর্থিক প্রতিবেদন দেখুন।',
  keywords: [
    'সেহা ফাউন্ডেশন বার্ষিক প্রতিবেদন',
    'কৃষি উন্নয়ন',
    'সম্প্রদায় কল্যাণ',
    'প্রশিক্ষণ',
    'গ্রামীণ উন্নয়ন',
    'আর্থিক প্রতিবেদন',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.seha.foundation/annual-report',
  },
  openGraph: {
    title: 'বার্ষিক প্রতিবেদন - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের বার্ষিক প্রতিবেদন ডাউনলোড করুন। কৃষি উন্নয়ন, সম্প্রদায় কল্যাণ, প্রশিক্ষণ ও টেকসই উন্নয়ন কার্যক্রমের বার্ষিক প্রভাব, অর্জন ও আর্থিক প্রতিবেদন দেখুন।',
    url: 'https://www.seha.foundation/annual-report',
    siteName: 'সেহা ফাউন্ডেশন',
    images: [
      {
        url: 'https://www.seha.foundation/annual-report-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'বার্ষিক প্রতিবেদন - সেহা ফাউন্ডেশন',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'বার্ষিক প্রতিবেদন - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনের বার্ষিক প্রতিবেদন ডাউনলোড করুন। কৃষি উন্নয়ন, সম্প্রদায় কল্যাণ, প্রশিক্ষণ ও টেকসই উন্নয়ন কার্যক্রমের বার্ষিক প্রভাব, অর্জন ও আর্থিক প্রতিবেদন দেখুন।',
    images: ['https://www.seha.foundation/annual-report-og-image.jpg'],
  },
};