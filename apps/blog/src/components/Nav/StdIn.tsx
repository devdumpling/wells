"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { CommandContext, execCommand, parseCommand } from "./lib/command";
import { isValidCommand } from "./lib/helpers";
import { StdOut } from "./StdOut";

/**
 * StdInput takes user input as if they were typing in the terminal.
 * If the user types a valid command, it will be executed and output will be shown in StdOut.
 *
 * As of now, only the `cd` command is supported, which performs clientside navigation via useRouter
 *
 * No route validation is done at this time. If you cd to a non-existent route, it will 404.
 * @returns StdInput
 */
export const StdIn = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [output, setOutput] = useState<string>("");

  const submitAction = async (formData: any) => {
    const command = formData.get("command");

    if (!command) return;

    try {
      const { cmd, args } = parseCommand(command);

      const ctx: CommandContext = {
        cmd,
        args,
        router,
        pathname,
        setOutput,
      };

      if (isValidCommand(cmd)) {
        execCommand(ctx);
      } else {
        console.log("Invalid command");
        setOutput(`Invalid command: ${cmd}. Try 'help' for help.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full group">
      <form action={submitAction} className="flex flex-col">
        <input
          className="w-full bg-inherit text-sm font-mono focus:outline-none caret-fuchsia-400 text-emerald-800 dark:text-emerald-300 placeholder:text-stone-200 dark:placeholder:text-stone-700"
          placeholder="cd blog"
          type="text"
          name="command"
          autoFocus
        />
      </form>
      <div className="hidden group-focus-within:block">
        <StdOut output={output} />
      </div>
    </div>
  );
};
