#!/usr/bin/env node

import { execSync } from "child_process";
const args = process.argv.slice(2);
const command = args[0];

const scripts = {
  fix: ["npm run format", "npm run lint", "npm run type-check"],
  check: ["npm run check:format", "npm run check:lint", "npm run check:types"],
  test: ["npm run test"],
};

if (!command || !scripts[command]) {
  console.log("Usage: clean-code-style <command>");
  console.log("Commands:");
  console.log("  fix    -> format + lint + type-check");
  console.log(
    "  check  -> check formatting, linting, and types without fixing"
  );
  console.log("  test   -> run jest tests");
  process.exit(1);
}

try {
  scripts[command].forEach((cmd) => {
    console.log(`\nRunning: ${cmd}`);
    execSync(cmd, { stdio: "inherit" });
  });
} catch (error) {
  console.error("\nCommand failed.");
  process.exit(1);
}
