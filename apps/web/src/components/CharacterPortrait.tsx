// CharacterPortrait.tsx
import Image from "next/image";

const CharacterPortrait = () => {
  return (
    <Image
      src="/assets/dev_nobg_2.webp"
      width={1365}
      height={2048}
      alt="A fantasy character picture of Dev carrying a macbook pro."
      priority
    />
  );
};

export default CharacterPortrait;
