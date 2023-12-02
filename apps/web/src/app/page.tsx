import Image from "next/image";

import {
  WEAPON_TOOLTIP,
  ARMOR_TOOLTIP,
  ACC_1_TOOLTIP,
  ACC_2_TOOLTIP,
} from "@/lib/constants";

import InventoryIcon from "@/components/InventoryIcon";

export default async function Character() {
  return (
    <section className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-4">
        <div className="flex flex-col items-center justify-center mx-8 font-mono hover:animate-pulse bg-gradient-to-r from-violet-500 to-primary bg-clip-text">
          <h1 className="text-3xl font-extrabold tracking-tight text-transparent scroll-m-20 sm:text-4xl lg:text-5xl">
            &#9001; Dev Wells &#9002;
          </h1>
          <div className="flex flex-row items-center justify-center gap-8">
            <span className="text-md sm:text-lg text-accent-foreground font-pixelify">
              LVL: 30
            </span>
            <span className="text-md sm:text-lg text-accent-foreground font-pixelify">
              Software Engineer
            </span>
            <span className="text-md sm:text-lg text-accent-foreground font-pixelify">
              Dad
            </span>
          </div>
        </div>
        <div className="relative px-4 py-8 h-1/3 sm:h-2/3 sm:w-2/3">
          {/* Character */}
          <Image
            src="/assets/dev_nobg.webp"
            width={1280}
            height={1280}
            alt="A fantasy character picture of Dev carrying a macbook pro."
            priority
          />

          {/* Inventory */}
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[10%] right-[10%] bg-transparent">
            <InventoryIcon
              src='/assets/macbook.webp'
              iconVariant="weapon"
              tooltip={WEAPON_TOOLTIP}
            />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[30%] right-[10%] bg-transparent">
            <InventoryIcon
              src='/assets/sweater.webp'
              iconVariant="armor"
              tooltip={ARMOR_TOOLTIP}
            />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[50%] right-[10%] bg-transparent">
            <InventoryIcon
              src="/assets/headphones.webp"
              iconVariant="accessory"
              tooltip={ACC_1_TOOLTIP}
            />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[70%] right-[10%] bg-transparent">
            <InventoryIcon
              src="/assets/mug.webp"
              iconVariant="accessory"
              tooltip={ACC_2_TOOLTIP}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
