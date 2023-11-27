import Image from "next/image";
import { Sword, Shirt, Plug } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";

const iconVariants = {
  weapon: (
    <Sword
      className="h-[0.8rem] w-[0.8rem] sm:h-[1.2rem] sm:w-[1.2rem]"
      color="hsl(var(--accent-foreground))"
    />
  ),
  armor: (
    <Shirt
      className="h-[0.8rem] w-[0.8rem] sm:h-[1.2rem] sm:w-[1.2rem]"
      color="hsl(var(--accent-foreground))"
    />
  ),
  accessory: (
    <Plug
      className="h-[0.8rem] w-[0.8rem] sm:h-[1.2rem] sm:w-[1.2rem]"
      color="hsl(var(--accent-foreground))"
    />
  ),
};

interface InventoryIconProps {
  src: string;
  iconVariant?: keyof typeof iconVariants;
  tooltip: Tooltip;
}

export interface Tooltip {
  title: string;
  description: string;
}

const InventoryIcon = ({
  src,
  iconVariant,
  tooltip: { title: tooltipTitle, description: tooltipDescription },
}: InventoryIconProps) => {
  return (
    <HoverCard openDelay={300}>
      { /* @ts-ignore */}      
      <HoverCardTrigger asChild>
        <Button
          className="w-full h-full p-0"
          variant="link"
          aria-label={tooltipTitle}
        >
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
                <span className="sr-only">
                  Inventory variant: {iconVariant}
                </span>
              </div>
            )}
          </div>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="bg-opacity-90 bg-violet-50"
        sideOffset={10}
        side="right"
      >
        <h3 className="text-lg font-semibold font-pixelify">{tooltipTitle}</h3>
        <p className="font-mono text-sm text-muted-foreground">
          {tooltipDescription}
        </p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default InventoryIcon;
