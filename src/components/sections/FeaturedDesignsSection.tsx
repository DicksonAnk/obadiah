import Image from 'next/image';
import Link from 'next/link';

interface DesignCardProps {
  imageSrc: string;
  title: string;
  alt: string;
}

function DesignCard({ imageSrc, title, alt }: DesignCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <Link
          href="/custom-order"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-sm text-sm font-medium transition-colors"
        >
          Order Custom
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedDesignsSection() {
  const designs: DesignCardProps[] = [
    {
      imageSrc: "/images/pexels-darkshadephotos-28959529.jpg",
      title: "Modern Kente Fusion",
      alt: "Modern Kente fusion dress"
    },
    {
      imageSrc: "/images/pexels-tubarones-4196160.jpg",
      title: "Elegant African Print",
      alt: "Elegant African print dress"
    },
    {
      imageSrc: "/images/pexels-rdne-6191870.jpg",
      title: "Traditional Celebration",
      alt: "Traditional celebration attire"
    },
    {
      imageSrc: "/images/pexels-kwakugriffn-14304917.jpg",
      title: "Contemporary Ankara",
      alt: "Contemporary Ankara design"
    },
    {
      imageSrc: "/images/pexels-thirdman-6109341.jpg",
      title: "Classic Ghana Style",
      alt: "Classic Ghanaian style dress"
    },
    {
      imageSrc: "/images/pexels-el-gringo-photo-116752370-17273203.jpg",
      title: "Royal African Print",
      alt: "Royal African print design"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Beautiful Designs from Our Seamstresses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <DesignCard key={index} {...design} />
          ))}
        </div>
      </div>
    </section>
  );
} 