import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-white dark:bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/image6.jpg"
          alt="Beautiful African woman in traditional dress"
          fill
          className="object-cover brightness-[0.85] dark:brightness-[0.75]"
          priority
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative h-full bg-black bg-opacity-30 dark:bg-opacity-40">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 drop-shadow-md">
              Your Perfect African Dress, Made Just for You
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md">
              Connect with skilled Ghanaian seamstresses for custom dresses that celebrate your style and heritage
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/browse"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-sm text-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Browse Designs
              </Link>
              <Link 
                href="/custom"
                className="bg-white hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-orange-900 dark:text-orange-400 px-8 py-3 rounded-sm text-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Get Custom Made
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 