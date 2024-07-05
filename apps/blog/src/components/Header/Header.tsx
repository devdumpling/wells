interface HeaderProps {
  title: string;
  compact?: boolean;
}

export const Header = ({ compact = true, title }: HeaderProps) => {
  return (
    <section className="container mx-auto font-mono text-sky-950 dark:text-sky-400">
      <h1 className="sm:text-5xl text-2xl font-pixel">{title}</h1>

      {!compact && (
        <p className="text-xs sm:text-sm font-pixel tracking-wide text-stone-500 dark:text-stone-400">
          lvl 31 -- 👩‍💻 code barbarian 🍖 -- they/he
        </p>
      )}
    </section>
  );
};
