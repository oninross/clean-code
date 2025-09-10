#!/usr/bin/env node

import fs from "fs";
import path from "path";

function extendPackageJson() {
  const pkgPath = path.resolve(process.cwd(), "package.json");
  if (!fs.existsSync(pkgPath)) {
    console.error("package.json not found");
    process.exit(1);
  }
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.scripts = {
    ...pkg.scripts,
    "check:format":
      "prettier --check './**/*.{js,jsx,ts,tsx,json}' --ignore-path .prettierignore --config ./.prettierrc.js",
    "check:lint": "next lint",
    format:
      "prettier --write './**/*.{js,jsx,ts,tsx,json}' --ignore-path .prettierignore --config ./.prettierrc.js",
    lint: "next lint",
  };
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log("package.json updated");
}

function extendTsconfigJson() {
  const tsconfigPath = path.resolve(process.cwd(), "tsconfig.json");
  let tsconfig = {};
  if (fs.existsSync(tsconfigPath)) {
    tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));
  }
  tsconfig.extends = "@oninross/clean-code/configs/tsconfig.json";
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
  console.log("tsconfig.json updated");
}

extendPackageJson();
extendTsconfigJson();
