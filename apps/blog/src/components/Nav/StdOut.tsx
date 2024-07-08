import React from "react";

export const StdOut = ({ output }: { output: string }) => {
  return (
    <pre className="flex flex-wrap text-sm text-wrap mt-2 font-mono text-emerald-500">
      {output}
    </pre>
  );
};
