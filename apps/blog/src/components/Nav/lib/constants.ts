export const VALID_COMMANDS: { [key: string]: string } = {
  cd: "cd",
  ls: "ls",
  clear: "clear",
  help: "help",
  which: "which",
};

// TODO: make this dynamic
export const mockFileSystem: { [key: string]: string[] } = {
  "/": ["blog"],
  "/blog": ["momentum", "react"],
};
