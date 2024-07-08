import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

/**
 * Pull the command and args from the command line
 * Currently only handles simple commands.
 * Does not handle flags, quoted strings, etc.
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
}

export const execCommand = (ctx: CommandContext) => {
  if (ctx.cmd === "cd") {
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
    }
  }
};

/**
 *
 * @param pathname the current pathname, pulled from usePathname -- will always start with /
 * @param argPathname user provided path to interact with
 * @returns
 */
const buildPath = (pathname: string, argPathname: string) => {
  // If no path provided, go to root
  if (!argPathname) return "/";

  // Handle ~ as the root directory
  if (argPathname.startsWith("~")) {
    argPathname = `/${argPathname.slice(1)}`;
  }

  // Handle absolute paths
  if (argPathname.startsWith("/")) {
    pathname = "/";
  }

  // Split the current pathname and the argument path into arrays
  const currentPathSegments = pathname.split("/").filter(Boolean);
  const argPathSegments = argPathname.split("/").filter(Boolean);

  // Process each segment of the argument path
  for (const segment of argPathSegments) {
    if (segment === ".") {
      // Current directory, no change
      continue;
    } else if (segment === "..") {
      // Parent directory, remove the last segment from current path
      currentPathSegments.pop();
    } else {
      // Add the segment to the current path
      currentPathSegments.push(segment);
    }
  }

  // Join the segments back into a path
  return "/" + currentPathSegments.join("/");
};

export const VALID_COMMANDS: { [key: string]: string } = {
  cd: "cd",
};

export const isValidCommand = (cmd: string) => {
  return VALID_COMMANDS[cmd];
};
