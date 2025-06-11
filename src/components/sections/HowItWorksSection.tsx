interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

function Step({ number, title, description, icon }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 bg-orange-100 dark:bg-orange-900/20 rounded-sm flex items-center justify-center">
        <span className="text-2xl text-orange-600 dark:text-orange-400">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Choose Your Design",
      description: "Browse our collection or share your inspiration",
      icon: "👗"
    },
    {
      number: 2,
      title: "Share Your Measurements",
      description: "Get help from our measurement guide",
      icon: "📏"
    },
    {
      number: 3,
      title: "Receive Your Perfect Dress",
      description: "Get your custom-made dress delivered",
      icon: "📦"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Simple as 1-2-3
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
} 