'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Testimonial {
  name: string;
  location: string;
  story: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Akosua Mensah',
    location: 'Kumasi',
    story: "Since joining, I've tripled my monthly income and have steady work every week. The platform has helped me build a loyal customer base.",
    image: '/images/seamstress-1.jpg'
  },
  {
    name: 'Abena Osei',
    location: 'Accra',
    story: "The flexible schedule allows me to balance my family life while growing my business. I love the quality of customers I get through the platform.",
    image: '/images/seamstress-2.jpg'
  },
  {
    name: 'Efua Kufuor',
    location: 'Cape Coast',
    story: "The training opportunities and community support have helped me improve my skills and take on more complex projects.",
    image: '/images/seamstress-3.jpg'
  }
];

const requirements = [
  'Minimum 2 years sewing experience',
  'Ability to work with African prints and traditional styles',
  'Own sewing machine and basic tools',
  'Reliable phone for communication',
  'Commitment to quality and deadlines',
  'Located in Ghana (specific regions if applicable)'
];

const SeamstressesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-900 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-600 dark:text-orange-400">For Seamstresses</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white dark:bg-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Turn Your Sewing Skills Into Steady Income
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join Ghana's premier platform connecting skilled seamstresses with customers who value quality craftsmanship
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  Start Earning Today
                </button>
                <p className="text-gray-600 dark:text-gray-400 self-center">
                  Join 500+ seamstresses already earning
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/seamstress-hero.jpg"
                alt="Ghanaian seamstress at work"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Seamstresses Love Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Steady Orders',
                description: 'Regular customers without the hustle of finding them',
                icon: '📦'
              },
              {
                title: 'Fair Payments',
                description: 'Competitive rates paid directly to your mobile money',
                icon: '💰'
              },
              {
                title: 'Flexible Schedule',
                description: 'Work when you want, from your own space',
                icon: '⏰'
              },
              {
                title: 'No Marketing Stress',
                description: 'We handle customer acquisition and communication',
                icon: '📱'
              },
              {
                title: 'Quality Materials',
                description: 'Access to premium fabrics through our network',
                icon: '🧵'
              },
              {
                title: 'Skill Development',
                description: 'Learn new techniques from fellow seamstresses',
                icon: '📚'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white dark:bg-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Your Journey with Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your portfolio and complete our simple application'
              },
              {
                step: '2',
                title: 'Get Approved',
                description: 'We review your work and welcome you to the platform'
              },
              {
                step: '3',
                title: 'Receive Orders',
                description: 'Get matched with customers based on your skills and location'
              },
              {
                step: '4',
                title: 'Create Magic',
                description: 'Craft beautiful dresses with provided measurements and designs'
              },
              {
                step: '5',
                title: 'Get Paid',
                description: 'Receive payment directly to your mobile money account'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Success Stories from Our Seamstresses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 mb-4">
                    {testimonial.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-white dark:bg-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What We Look For
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-orange-600 dark:text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeamstressesPage; 