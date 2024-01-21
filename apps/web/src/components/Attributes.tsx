import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Attributes() {
  return (
    <div className="flex justify-between gap-3 p-4 font-pixelify">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">
                13
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                STR
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent className="p-2 bg-gray-100 rounded-md dark:bg-gray-800">
            <p>Strength measures physical power and carrying capacity.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">
                14
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">WIS</p>
            </div>
          </TooltipTrigger>
          <TooltipContent className="p-2 bg-gray-100 rounded-md dark:bg-gray-800">
            <p>
              Wisdom describes a character&apos;s willpower, common sense, and
              intuition.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">
                18
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                CHA
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent className="p-2 bg-gray-100 rounded-md dark:bg-gray-800">
            <p>
              Charisma measures a character&apos;s force of personality,
              persuasiveness, and leadership.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
