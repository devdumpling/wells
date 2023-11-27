import Image from "next/image";

import devCharacter from "../../public/assets/dev_nobg.webp";
import macbook from "../../public/assets/macbook.svg";
import sweater from "../../public/assets/sweater.svg";
import headphones from "../../public/assets/headphones.svg";
import mug from "../../public/assets/mug.svg";
import {
  WEAPON_TOOLTIP,
  ARMOR_TOOLTIP,
  ACC_1_TOOLTIP,
  ACC_2_TOOLTIP,
} from "@/lib/constants";

import InventoryIcon from "@/components/InventoryIcon";

export default async function Character() {
  return (
    <section className="flex flex-row items-center justify-center my-8">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-4">
        <div className="flex flex-col items-center justify-center mx-8 font-mono hover:animate-pulse bg-gradient-to-r from-violet-500 to-primary bg-clip-text">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent scroll-m-20 lg:text-5xl">
            &#9001; Dev Wells &#9002;
          </h1>
          <div className="flex flex-row items-center justify-center gap-8">
            <span className="text-lg text-accent-foreground font-pixelify">
              LVL: 30
            </span>
            <span className="text-lg text-accent-foreground font-pixelify">
              Software Engineer
            </span>
            <span className="text-lg text-accent-foreground font-pixelify">
              Dad
            </span>
          </div>
        </div>
        <div className="relative px-4 py-8 border-primary h-1/3 sm:h-2/3 sm:w-2/3">
          {/* Character */}
          <Image
            src={devCharacter}
            alt="A fantasy character picture of Dev carrying a macbook pro."
            priority
          />

          {/* Inventory */}
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[10%] right-[10%] bg-transparent">
            <InventoryIcon
              src={macbook}
              iconVariant="weapon"
              tooltip={WEAPON_TOOLTIP}
            />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[30%] right-[10%] bg-transparent">
            <InventoryIcon
              src={sweater}
              iconVariant="armor"
              tooltip={ARMOR_TOOLTIP}
            />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[50%] right-[10%] bg-transparent">
            <InventoryIcon
              src={headphones}
              iconVariant="accessory"
              tooltip={ACC_1_TOOLTIP}
            />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[70%] right-[10%] bg-transparent">
            <InventoryIcon
              src={mug}
              iconVariant="accessory"
              tooltip={ACC_2_TOOLTIP}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
