import Image from "next/image";

import {
  WEAPON_TOOLTIP,
  ARMOR_TOOLTIP,
  ACC_1_TOOLTIP,
  ACC_2_TOOLTIP,
} from "@/lib/constants";

import InventoryIcon from "@/components/InventoryIcon";
import StatBlock from "@/components/StatBlock";

export default async function Character() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-around max-w-screen-xl m-2 tracking-wide md:flex-row rounded-3xl backdrop-blur-sm font-primary text-mono">
        <div className="flex flex-col gap-8 p-8 basis-1/2 rounded-3xl">
          <div className="flex flex-col">
            <div className="flex flex-row items-baseline gap-2 pb-4 border-b-4">
              <h1 className="font-mono text-2xl font-bold">dev.wells</h1>
              <h2 className="text-xl italic text-muted-foreground">
                lvl 30 | they/he
              </h2>
            </div>
          </div>
          <StatBlock />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-pixelify">
              characteristics
            </h2>
            <p className="font-serif italic">
              I dwell in the midwest, raising my daughter, perfecting vegan mac,
              tinkering, playing games, and pretending to enjoy the cold.
            </p>
          </div>
        </div>

        <div className="relative px-4 py-8 h-1/3 sm:h-1/2 sm:w-1/2">
          {/* Character */}
          <Image
            src="/assets/dev_nobg_2.webp"
            width={1365}
            height={2048}
            alt="A fantasy character picture of Dev carrying a macbook pro."
            priority
          />

          {/* Inventory */}
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[10%] right-[10%] bg-transparent">
            <InventoryIcon
              src="/assets/macbook.webp"
              iconVariant="weapon"
              tooltip={WEAPON_TOOLTIP}
            />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[30%] right-[10%] bg-transparent">
            <InventoryIcon
              src="/assets/sweater.webp"
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
