#!/usr/bin/env node

"use strict";

const currentNodeVersion = process.versions.node;
const currVer = currentNodeVersion.split(".");
const major = currVer[0];

const { logger } = require("./src/utils/logger");
if (major < 14) {
  logger.error(
    "You are running Node " +
      currentNodeVersion +
      ".\n" +
      "Create Telegram Bot requires Node 14 or higher. \n" +
      "Please update your version of Node."
  );
  process.exit(1);
}

const { init } = require("./src/main/init");

init();
