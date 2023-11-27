import Image from "next/image";

interface InventoryIconProps {
  src: string;
}

const InventoryIcon = ({ src }: InventoryIconProps) => {
  return (
    <div className="p-2 bg-opacity-50 rounded-md shadow-md opacity-90 hover:opacity-100 hover:animate-pulse bg-violet-50">
      <Image src={src} alt="An image of an item in an inventory" priority width={128} height={128} />
    </div>
  );
};

export default InventoryIcon;
