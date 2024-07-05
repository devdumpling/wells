import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <main className="p-4">
      <Header title="dev.wells" compact={false} />

      <section className="container mx-auto font-mono  leading-8 italic py-4 my-4  text-amber-950 dark:text-amber-100">
        <p className="text-md">
          midwest{" "}
          <span className="font-bold text-sky-900 dark:text-sky-300">
            dwell
          </span>
          er{" "}
        </p>
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
