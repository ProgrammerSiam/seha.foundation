import { Metadata } from 'next';

export const donateMetadata: Metadata = {
  title: 'অনুদান করুন - সেহা ফাউন্ডেশন',
  description:
    'সেহা ফাউন্ডেশনে অনুদান করে টেকসই উন্নয়নে অবদান রাখুন। আর্থিক সহায়তা, পণ্য দান ও স্বেচ্ছাসেবার মাধ্যমে গ্রামীণ সম্প্রদায়ের সামাজিক ও অর্থনৈতিক উন্নয়নে সহায়তা করুন।',
  keywords: [
    'সেহা ফাউন্ডেশন অনুদান',
    'আর্থিক সহায়তা',
    'পণ্য দান',
    'স্বেচ্ছাসেবা',
    'গ্রামীণ উন্নয়ন',
    'টেকসই উন্নয়ন',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.seha.foundation/donate',
  },
  openGraph: {
    title: 'অনুদান করুন - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনে অনুদান করে টেকসই উন্নয়নে অবদান রাখুন। আর্থিক সহায়তা, পণ্য দান ও স্বেচ্ছাসেবার মাধ্যমে গ্রামীণ সম্প্রদায়ের সামাজিক ও অর্থনৈতিক উন্নয়নে সহায়তা করুন।',
    url: 'https://www.seha.foundation/donate',
    siteName: 'সেহা ফাউন্ডেশন',
    images: [
      {
        url: 'https://www.seha.foundation/donate-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'অনুদান করুন - সেহা ফাউন্ডেশন',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'অনুদান করুন - সেহা ফাউন্ডেশন',
    description:
      'সেহা ফাউন্ডেশনে অনুদান করে টেকসই উন্নয়নে অবদান রাখুন। আর্থিক সহায়তা, পণ্য দান ও স্বেচ্ছাসেবার মাধ্যমে গ্রামীণ সম্প্রদায়ের সামাজিক ও অর্থনৈতিক উন্নয়নে সহায়তা করুন।',
    images: ['https://www.seha.foundation/donate-og-image.jpg'],
  },
};