import CharacterPortrait from "@/components/CharacterPortrait";
import CharacterInfo from "@/components/CharacterInfo";
import Inventory from "@/components/Inventory";
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
          <CharacterInfo />
        </div>

        <div className="relative px-4 py-8 h-1/3 sm:h-1/2 sm:w-1/2">
          <CharacterPortrait />
          <Inventory />          
        </div>
      </div>
    </section>
  );
}
