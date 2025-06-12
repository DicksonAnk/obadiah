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
    name: 'Mr Benneh',
    location: 'Kumasi',
    story: "Since joining, I've tripled my monthly income and have steady work every week. The platform has helped me build a loyal customer base.",
    image: '/images/seamstresses/seamstress-1.jpg'
  },
  {
    name: 'Abena Osei',
    location: 'Accra',
    story: "The flexible schedule allows me to balance my family life while growing my business. I love the quality of customers I get through the platform.",
    image: '/images/seamstresses/seamstress-2.jpg'
  },
  {
    name: 'Efua Kufuor',
    location: 'Cape Coast',
    story: "The training opportunities and community support have helped me improve my skills and take on more complex projects.",
    image: '/images/seamstresses/seamstress-3.jpg'
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

      {/* Hero Section - Text Only */}
      <section className="relative bg-white dark:bg-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Turn Your Sewing Skills Into Steady Income
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join Ghana's premier platform connecting skilled seamstresses with customers who value quality craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Start Earning Today
              </button>
              <p className="text-gray-600 dark:text-gray-400 self-center">
                Join 500+ seamstresses already earning
              </p>
            </div>
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