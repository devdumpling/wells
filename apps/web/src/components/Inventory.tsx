// Inventory.tsx
import InventoryIcon, {
  Tooltip,
  IconVariant,
} from "@/components/InventoryIcon";
import {
  WEAPON_TOOLTIP,
  ARMOR_TOOLTIP,
  ACC_1_TOOLTIP,
  ACC_2_TOOLTIP,
} from "@/lib/constants";

interface InventoryItemProps {
  src: any;
  iconVariant?: IconVariant;
  tooltip: Tooltip;
  position: string;
}

const Inventory = () => {
  return (
    <>
      <InventoryItem
        src="/assets/macbook.webp"
        iconVariant="weapon"
        tooltip={WEAPON_TOOLTIP}
        position="top-[10%] right-[10%]"
      />
      <InventoryItem
        src="/assets/sweater.webp"
        iconVariant="armor"
        tooltip={ARMOR_TOOLTIP}
        position="top-[30%] right-[10%]"
      />
      <InventoryItem
        src="/assets/headphones.webp"
        iconVariant="accessory"
        tooltip={ACC_1_TOOLTIP}
        position="top-[50%] right-[10%]"
      />
      <InventoryItem
        src="/assets/mug.webp"
        iconVariant="accessory"
        tooltip={ACC_2_TOOLTIP}
        position="top-[70%] right-[10%]"
      />
    </>
  );
};

const InventoryItem = ({
  src,
  iconVariant,
  tooltip,
  position,
}: InventoryItemProps) => {
  const positionClasses = `absolute shadow-lg w-16 h-16 sm:h-32 sm:w-32 ${position} bg-transparent`;
  return (
    <div className={positionClasses}>
      <InventoryIcon src={src} iconVariant={iconVariant} tooltip={tooltip} />
    </div>
  );
};

export default Inventory;
