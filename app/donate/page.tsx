'use client';

import { useState } from 'react';
import {
  Heart,
  CreditCard,
  Banknote,
  QrCode,
  Smartphone,
  Globe,
  Wallet,
  CheckCircle,
  ArrowRight,
  Lock,
  Shield,
  Gift,
  Users,
  Leaf,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function DonatePage() {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);

  const predefinedAmounts = [500, 1000, 2000, 5000, 10000, 20000];

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'ক্রেডিট/ডেবিট কার্ড',
      icon: CreditCard,
      description: 'ভিসা, মাস্টারকার্ড, আমেরিকান এক্সপ্রেস',
    },
    {
      id: 'bank-transfer',
      name: 'ব্যাংক ট্রান্সফার',
      icon: Banknote,
      description: 'সরাসরি ব্যাংক ট্রান্সফার',
    },
    {
      id: 'mobile-wallet',
      name: 'মোবাইল ওয়ালেট',
      icon: Wallet,
      description: 'বিকাশ, নগদ, রকেট',
    },
    {
      id: 'qr-code',
      name: 'কিউআর কোড পেমেন্ট',
      icon: QrCode,
      description: 'স্ক্যান করে তাৎক্ষণিক পেমেন্ট করুন',
    },
    {
      id: 'international',
      name: 'আন্তর্জাতিক পেমেন্ট',
      icon: Globe,
      description: 'পেপ্যাল, স্ট্রাইপ, ওয়াইজ',
    },
    {
      id: 'cash',
      name: 'নগদ পেমেন্ট',
      icon: Banknote,
      description: 'অফিসে সরাসরি',
    },
  ];

  const donationImpacts = [
    {
      icon: Leaf,
      title: 'কৃষকদের সহায়তা',
      description: 'গ্রামীণ কৃষকদের জন্য বীজ ও সরঞ্জাম সরবরাহ',
    },
    {
      icon: Users,
      title: 'সম্প্রদায় কর্মসূচি',
      description: 'শিক্ষা ও স্বাস্থ্যসেবা উন্নয়নে অবদান',
    },
    {
      icon: TrendingUp,
      title: 'টেকসই উন্নয়ন',
      description: 'দীর্ঘমেয়াদী গ্রামীণ উন্নয়নে বিনিয়োগ',
    },
    {
      icon: Gift,
      title: 'জরুরি সাহায্য',
      description: 'সংকটকালে তাৎক্ষণিক সাহায্য প্রদান',
    },
  ];

  const handleAmountSelect = (value: string) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate form submission
    setTimeout(() => {
      setIsProcessing(false);
      alert('আপনার দানের জন্য ধন্যবাদ! আপনার অবদান প্রভাবশালী হবে।');
      // Reset form
      setAmount('');
      setCustomAmount('');
      setPaymentMethod('credit-card');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
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
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
              style={{ color: '#123427' }}
            >
              সেহা ফাউন্ডেশনে দান করুন
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
              আপনার দান গ্রামীণ সম্প্রদায়গুলিকে ক্ষমতায়ন করতে এবং বাংলাদেশে
              একটি টেকসই ভবিষ্যত গড়ে তুলতে সাহায্য করে। প্রতিটি অবদান, বড় বা
              ছোট, একটি অর্থপূর্ণ পার্থক্য তৈরি করে।
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: '#123427' }}
                >
                  দান করুন
                </h2>

                {/* Donation Type */}
                <div className="mb-8">
                  <h3 className="font-bold mb-4" style={{ color: '#123427' }}>
                    দানের ধরণ
                  </h3>
                  <div className="flex gap-2 md:gap-4">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`px-2 md:px-6 py-3 text-sm md:text-base rounded-lg font-medium transition-all`}
                      style={{
                        ...(donationType === 'one-time'
                          ? {
                              background:
                                'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                              color: 'white',
                              boxShadow: '0 4px 6px rgba(10, 107, 62, 0.25)',
                            }
                          : {
                              backgroundColor: '#FFF9E6',
                              color: '#123427',
                            }),
                      }}
                    >
                      এককালীন দান
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`px-2 md:px-6 py-3 text-sm md:text-base rounded-lg font-medium transition-all`}
                      style={{
                        ...(donationType === 'monthly'
                          ? {
                              background:
                                'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                              color: 'white',
                              boxShadow: '0 4px 6px rgba(10, 107, 62, 0.25)',
                            }
                          : {
                              backgroundColor: '#FFF9E6',
                              color: '#123427',
                            }),
                      }}
                    >
                      মাসিক দান
                    </button>
                  </div>
                </div>

                {/* Donation Amount */}
                <div className="mb-8">
                  <h3 className="font-bold mb-4" style={{ color: '#123427' }}>
                    পরিমাণ নির্বাচন করুন (টাকা)
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                    {predefinedAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => handleAmountSelect(amt.toString())}
                        className={`py-3 rounded-lg font-medium transition-all`}
                        style={{
                          ...(amount === amt.toString()
                            ? {
                                background:
                                  'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                                color: 'white',
                                boxShadow: '0 4px 6px rgba(10, 107, 62, 0.25)',
                              }
                            : {
                                backgroundColor: '#FFF9E6',
                                color: '#123427',
                              }),
                        }}
                      >
                        ৳{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: '#123427' }}
                    >
                      অথবা কাস্টম পরিমাণ লিখুন
                    </label>
                    <div className="relative">
                      <span
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg"
                        style={{ color: '#56766B' }}
                      >
                        ৳
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="পরিমাণ লিখুন"
                        className="w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:outline-none"
                        style={{
                          border: '1px solid #E6E2DA',
                          color: '#123427',
                          backgroundColor: '#FFFFFF',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#0A6B3E';
                          e.target.style.boxShadow =
                            '0 0 0 3px rgba(10, 107, 62, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#E6E2DA';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <h3 className="font-bold mb-4" style={{ color: '#123427' }}>
                    পেমেন্ট পদ্ধতি
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 rounded-xl text-left transition-all flex items-start gap-3`}
                          style={{
                            ...(paymentMethod === method.id
                              ? {
                                  background:
                                    'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
                                  border: '2px solid #0A6B3E',
                                  boxShadow: '0 4px 6px rgba(10, 107, 62, 0.1)',
                                }
                              : {
                                  backgroundColor: '#FFFFFF',
                                  border: '1px solid #E6E2DA',
                                }),
                          }}
                        >
                          <Icon
                            className="w-6 h-6 mt-0.5 flex-shrink-0"
                            style={{
                              color:
                                paymentMethod === method.id
                                  ? '#0A6B3E'
                                  : '#56766B',
                            }}
                          />
                          <div>
                            <div
                              className="font-medium"
                              style={{
                                color:
                                  paymentMethod === method.id
                                    ? '#0A6B3E'
                                    : '#123427',
                              }}
                            >
                              {method.name}
                            </div>
                            <div
                              className="text-sm"
                              style={{ color: '#56766B' }}
                            >
                              {method.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Payment Details Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block font-medium mb-2"
                        style={{ color: '#123427' }}
                      >
                        পূর্ণ নাম
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:outline-none"
                        placeholder="আপনার পূর্ণ নাম"
                        style={{
                          border: '1px solid #E6E2DA',
                          color: '#123427',
                          backgroundColor: '#FFFFFF',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#0A6B3E';
                          e.target.style.boxShadow =
                            '0 0 0 3px rgba(10, 107, 62, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#E6E2DA';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="block font-medium mb-2"
                        style={{ color: '#123427' }}
                      >
                        ইমেইল ঠিকানা
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:outline-none"
                        placeholder="you@example.com"
                        style={{
                          border: '1px solid #E6E2DA',
                          color: '#123427',
                          backgroundColor: '#FFFFFF',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#0A6B3E';
                          e.target.style.boxShadow =
                            '0 0 0 3px rgba(10, 107, 62, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#E6E2DA';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: '#123427' }}
                    >
                      বার্তা (ঐচ্ছিক)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:outline-none"
                      placeholder="আপনার দানের জন্য একটি বার্তা বা উৎসর্গ লিখুন"
                      style={{
                        border: '1px solid #E6E2DA',
                        color: '#123427',
                        backgroundColor: '#FFFFFF',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#0A6B3E';
                        e.target.style.boxShadow =
                          '0 0 0 3px rgba(10, 107, 62, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#E6E2DA';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="anonymous"
                      className="w-5 h-5 rounded focus:ring-emerald-500"
                      style={{ color: '#0A6B3E' }}
                    />
                    <label
                      htmlFor="anonymous"
                      className="ml-2"
                      style={{ color: '#123427' }}
                    >
                      বেনামীভাবে দান করুন
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing || (!amount && !customAmount)}
                    className={`w-full py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                      !amount && !customAmount
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                    style={{
                      background:
                        'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                      color: '#FFFFFF',
                      boxShadow:
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isProcessing && (amount || customAmount)) {
                        e.currentTarget.style.boxShadow =
                          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    }}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        প্রক্রিয়াকরণ হচ্ছে...
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />৳
                        {amount || customAmount || '0'} দান করুন{' '}
                        {donationType === 'monthly' ? 'মাসিক' : ''}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-sm mt-4">
                    <Shield className="w-4 h-4" style={{ color: '#0A6B3E' }} />
                    <span style={{ color: '#56766B' }}>
                      সেহা ফাউন্ডেশন দ্বারা সুরক্ষিত পেমেন্ট
                    </span>
                  </div>
                </form>
              </div>
            </div>

            {/* Impact Information */}
            <div>
              <div
                className="rounded-2xl p-8 mb-8"
                style={{
                  background:
                    'linear-gradient(135deg, #0A6B3E 0%, #2E8F57 100%)',
                }}
              >
                <h2 className="text-2xl font-bold mb-6 text-white">
                  আপনার প্রভাব
                </h2>

                <div className="space-y-6">
                  {donationImpacts.map((impact, index) => {
                    const Icon = impact.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">
                            {impact.title}
                          </h3>
                          <p className="text-white/90">{impact.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="mt-8 p-4 rounded-xl"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <h3 className="font-bold mb-2 text-white">
                    দানের সুবিধাসমূহ
                  </h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>ট্যাক্স কর্তনযোগ্য রশিদ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>নিয়মিত প্রভাব আপডেট</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>স্বীকৃতি (ঐচ্ছিক)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6E2DA',
                  boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
                }}
              >
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#123427' }}
                >
                  দানের অন্যান্য উপায়
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Gift
                      className="w-5 h-5 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <div>
                      <h3 className="font-bold" style={{ color: '#123427' }}>
                        কর্পোরেট ম্যাচিং
                      </h3>
                      <p className="text-sm" style={{ color: '#56766B' }}>
                        চেক করুন আপনার নিয়োগকর্তা কি SEHA ফাউন্ডেশনে দানের জন্য
                        ম্যাচ করেন কিনা।
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users
                      className="w-5 h-5 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <div>
                      <h3 className="font-bold" style={{ color: '#123427' }}>
                        তহবিল সংগ্রহ
                      </h3>
                      <p className="text-sm" style={{ color: '#56766B' }}>
                        একটি বিশেষ উপলক্ষ্যে নিজের তহবিল সংগ্রহ কর্মসূচি তৈরি
                        করুন।
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Leaf
                      className="w-5 h-5 mt-0.5"
                      style={{ color: '#0A6B3E' }}
                    />
                    <div>
                      <h3 className="font-bold" style={{ color: '#123427' }}>
                        পরিকল্পিত দান
                      </h3>
                      <p className="text-sm" style={{ color: '#56766B' }}>
                        আপনার ইচ্ছাপত্র বা সম্পত্তির পরিকল্পনায় SEHA ফাউন্ডেশন
                        অন্তর্ভুক্ত করুন।
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full mt-6 py-3 rounded-lg font-bold transition-all"
                  style={{
                    backgroundColor: '#FFF9E6',
                    color: '#0A6B3E',
                    border: '1px solid #E6E2DA',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A6B3E';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFF9E6';
                    e.currentTarget.style.color = '#0A6B3E';
                  }}
                >
                  আরও বিকল্পের জন্য আমাদের সাথে যোগাযোগ করুন
                </button>
              </div>
            </div>
          </div>

          {/* Security & Trust */}
          <div
            className="mt-12 rounded-2xl p-8 text-center"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E6E2DA',
              boxShadow: '0 4px 10px rgba(10, 107, 62, 0.15)',
            }}
          >
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12" style={{ color: '#0A6B3E' }} />
            </div>
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: '#123427' }}
            >
              নিরাপদ ও বিশ্বস্ত দান
            </h2>
            <p className="max-w-2xl mx-auto mb-6" style={{ color: '#56766B' }}>
              আপনার দান এন্ড-টু-এন্ড এনক্রিপশনের মাধ্যমে নিরাপদ পেমেন্ট গেটওয়ের
              মাধ্যমে প্রক্রিয়াকরণ করা হয়। আমরা আপনার গোপনীয়তা রক্ষা করার এবং
              আপনার অবদান কার্যকরভাবে ব্যবহার করার প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" style={{ color: '#0A6B3E' }} />
                <span style={{ color: '#123427' }}>২৫৬-বিট SSL এনক্রিপশন</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: '#0A6B3E' }} />
                <span style={{ color: '#123427' }}>ট্যাক্স কর্তনযোগ্য</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" style={{ color: '#0A6B3E' }} />
                <span style={{ color: '#123427' }}>১০০% নিরাপদ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
