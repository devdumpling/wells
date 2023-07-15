export interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero(props: HeroProps) {
  return (
    <div className="px-6 py-24 bg-white sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {props.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">{props.subtitle}</p>
      </div>
    </div>
  );
}
