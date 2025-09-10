#!/usr/bin/env node

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const args = process.argv.slice(2);

let command = args[0];

// Support --fix, --check, --test and -f, -c, -t flags
if (!command || command.startsWith("-")) {
  if (args.includes("--fix") || args.includes("-f")) command = "fix";
  else if (args.includes("--check") || args.includes("-c")) command = "check";
  else if (args.includes("--test") || args.includes("-t")) command = "test";
}

if (args.includes("--install") || args.includes("-i")) {
  // Run install.js in the same directory
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const installPath = resolve(__dirname, "install.js");
  const { spawnSync } = await import("child_process");
  const result = spawnSync("node", [installPath], { stdio: "inherit" });
  process.exit(result.status);
}

const scripts = {
  fix: ["npm run format", "npm run lint", "npm run type-check"],
  check: ["npm run check:format", "npm run check:lint", "npm run check:types"],
  test: ["npm run test"],
};

if (!command || !scripts[command]) {
  console.log("Usage: clean-code <command>");
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
