module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-wells`
  extends: ["wells"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
