const BIO_CODE = `
const dev = {
  pronouns: ['they', 'them', 'he', 'him'],
  currentRole: 'Lead Engineer, Frontend Platform Engineering @ GoodRx',
  techStack: ['React', 'Next.js', 'TypeScript', 'Node/Deno/bun', 'Turborepo'],
  hobbies: ['Reading', 'Writing', 'Climbing'],
};
`;

const PROPERTIES = ["dad", "soft", "climb", "read", "play"];
const COLORS = ["fuchsia", "sky", "teal", "amber", "indigo"];

const PropertyBadge = ({ text }: { text: string }) => {
  const index = PROPERTIES.indexOf(text);
  const color = COLORS[index % COLORS.length];

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold dark:text-${color}-500`}
    >
      {text}
    </span>
  );
};

export default function Home() {
  return (
    <main>
      <section className="container mx-auto font-mono p-4 dark:text-fuchsia-50">
        <h1 className="text-3xl font-bold">Dev(on) Wells</h1>

        {PROPERTIES.map((text) => (
          <PropertyBadge key={text} text={text} />
        ))}

        <pre className="my-4 text-sm font-mono dark:text-stone-400"></pre>
      </section>
    </main>
  );
}
