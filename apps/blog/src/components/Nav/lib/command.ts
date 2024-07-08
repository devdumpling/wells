import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { buildPath, isValidCommand } from "./helpers";
import { mockFileSystem } from "./constants";

/**
 * Pull the command and args from the command line
 * Currently only handles simple commands.
 * Does not yet handle flags, quoted strings, etc.
 * @param command
 * @returns
 */
export const parseCommand = (command: string) => {
  const [cmd, ...args] = command.split(" ");
  return { cmd, args };
};

export interface CommandContext {
  cmd: string;
  args: string[];
  router: AppRouterInstance;
  pathname: string;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}

export const execCommand = (ctx: CommandContext) => {
  switch (ctx.cmd) {
    case "cd":
      changeDirectory(ctx);
      break;
    case "ls":
      listDirectory(ctx);
      break;
    case "clear":
      clear(ctx);
      break;
    case "help":
      help(ctx);
      break;
    case "which":
      which(ctx);
      break;
    default:
      console.log("Invalid command");
      ctx.setOutput(`Invalid command: ${ctx.cmd}. Try 'help' for help.`);
      break;
  }
};

export const clear = (ctx: CommandContext) => {
  ctx.setOutput("");
};

export const help = (ctx: CommandContext) => {
  ctx.setOutput("Commands: cd, ls, clear, help");
};

export const which = (ctx: CommandContext) => {
  let output = "";
  const cmd = ctx.args[0];
  if (cmd === "" || cmd === undefined) {
    output = "Usage: which <command>";
  } else if (isValidCommand(cmd)) {
    output = `/dev/bin/${cmd}`;
  } else {
    output = `${cmd} not found`;
  }
  ctx.setOutput(output);
};

export const changeDirectory = (ctx: CommandContext) => {
  // Next only lets us push to relative pathnames
  // but we have to also handle logic for ./ ../ and ~
  const argPathname = ctx.args.length > 0 ? ctx.args[0] : "";

  try {
    // Use route pathname + provided path to build relative pathname
    const pathname = buildPath(ctx.pathname, argPathname);

    if (pathname) {
      ctx.router.push(pathname);
    }
  } catch (error) {
    console.error(error);
    ctx.setOutput(`Invalid path: ${argPathname}`);
  }
};

export const listDirectory = (ctx: CommandContext) => {
  // List directory contents
  // If no path provided, list current directory
  let pathname = ctx.pathname;

  if (ctx.args.length > 0 && ctx.args[0] !== "") {
    pathname = buildPath(ctx.pathname, ctx.args[0]);
  }

  const files = mockFileSystem[pathname];
  if (files) {
    const output = formatListOutput(files);
    console.log(output);
    ctx.setOutput(output);
  } else {
    console.log(`No such directory: ${pathname}`);
  }
};

const formatListOutput = (files: string[]) => {
  return files
    .map((file) => {
      return `${file}`;
    })
    .join("\t");
};
