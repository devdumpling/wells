import Image from "next/image";

import devCharacter from "../../public/assets/dev_nobg.webp";
import macbook from "../../public/assets/macbook.svg";
import sweater from "../../public/assets/sweater.svg";
import pants from "../../public/assets/pants.svg";
import boots from "../../public/assets/boots.svg";

import InventoryIcon from "@/components/InventoryIcon";

export default async function Character() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-4">
        <div className="relative px-4 py-8 border-primary h-1/3 sm:h-2/3 sm:w-2/3">
          {/* Character Image */}
          <Image
            src={devCharacter}
            alt="A fantasy character picture of Dev carrying a macbook pro."
            priority
          />

          {/* Positioning Inventory Icons */}
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[10%] right-[10%] rounded-md">
            <InventoryIcon src={macbook} />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[30%] right-[10%] rounded-md">
            <InventoryIcon src={sweater} />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[50%] right-[10%] rounded-md">
            <InventoryIcon src={pants} />
          </div>
          <div className="absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 top-[70%] right-[10%] rounded-md">
            <InventoryIcon src={boots} />
          </div>
        </div>
      </div>
    </section>
  );
}
