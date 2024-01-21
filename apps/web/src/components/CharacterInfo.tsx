const CharacterInfo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-baseline gap-2 pb-4 border-b-4">
        <h1 className="font-mono text-2xl font-bold">dev.wells</h1>
        <h2 className="text-xl italic text-muted-foreground">
          lvl 30 | they/he
        </h2>
      </div>

      <p className="my-4 font-serif italic">
        I dwell in the midwest, raising my daughter, perfecting vegan mac,
        tinkering, playing games, and pretending to enjoy the cold.
      </p>
    </div>
  );
};

export default CharacterInfo;
