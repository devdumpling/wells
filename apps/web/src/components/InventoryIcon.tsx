import Image from "next/image";
import { Sword, Shirt, Plug } from "lucide-react";

const iconVariants = {
  weapon: <Sword color="hsl(var(--accent-foreground))" />,
  armor: <Shirt color="hsl(var(--accent-foreground))" />,
  accessory: <Plug color="hsl(var(--accent-foreground))" />,
};

interface InventoryIconProps {
  src: string;
  iconVariant?: keyof typeof iconVariants;
}

const InventoryIcon = ({ src, iconVariant }: InventoryIconProps) => {
  return (
    <div className="relative p-2 bg-opacity-50 rounded-md shadow-md opacity-90 hover:opacity-100 hover:animate-pulse bg-violet-50">
      <Image
        src={src}
        alt="An image of an item in an inventory"
        priority
        width={128}
        height={128}
      />
      {iconVariant && (
        <div className="absolute opacity-25 top-2 right-2">
          {iconVariants[iconVariant]}
          <span className="sr-only">Inventory variant: {iconVariant}</span>
        </div>
      )}
    </div>
  );
};

export default InventoryIcon;
