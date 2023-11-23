export interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="py-12 pt-32 bg-tertiary sm:pb-16">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
