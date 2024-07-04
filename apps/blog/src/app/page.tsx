export default function Home() {
  return (
    <main className="p-4">
      <section className="container mx-auto font-mono text-sky-950 dark:text-sky-500">
        <h1 className="text-3xl font-bold">dev.wells</h1>
        <p className="text-xs text-stone-500 dark:text-stone-400">
          lvl 31 | they/he
        </p>
      </section>

      <section className="container mx-auto font-mono  leading-8 italic py-4 my-4  text-amber-950 dark:text-amber-100">
        <p className="text-md">
          midwest{" "}
          <span className="font-bold text-amber-900 dark:text-amber-300">
            dwell
          </span>
          er{" "}
        </p>
        <p>code smeller</p>
        <p>
          daughter dad,
          <br />
          put the kids to bed
          <br />
          story teller.
        </p>
      </section>
    </main>
  );
}
