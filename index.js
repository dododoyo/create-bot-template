#!/usr/bin/env node

"use strict";

const currentNodeVersion = process.versions.node;
const currVer = currentNodeVersion.split(".");
const major = currVer[0];

if (major < 14) {
  console.error(
    "You are running Node " +
      currentNodeVersion +
      ".\n" +
      "Create Telegram Bot requires Node 14 or higher. \n" +
      "Please update your version of Node."
  );
  process.exit(1);
}

const { init } = require("./setupProject");

init();
