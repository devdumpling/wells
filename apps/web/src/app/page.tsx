import Image from "next/image";

export default async function Character() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="border-t-8 border-l-8 border-solid rounded-full border-primary h-1/3 sm:h-1/2 sm:w-1/2">
          <Image
            src="/assets/dev_nobg.webp"
            alt="Character"
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
}
