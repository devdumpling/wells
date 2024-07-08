import { VALID_COMMANDS } from "./constants";

export const isValidCommand = (cmd: string) => {
  return VALID_COMMANDS[cmd];
};

/**
 *
 * @param pathname the current pathname, pulled from usePathname -- will always start with /
 * @param argPathname user provided path to interact with
 * @returns
 */
export const buildPath = (pathname: string, argPathname: string) => {
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
