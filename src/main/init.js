// enable strict mode to catch common coding mistakes and unsafe actions
"use strict";
const { logger } = require("../utils/logger");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isValidWrapper = require("../validation/isValidWrapper");
const isValidFileName = require("../validation/isValidFileName");
const getFileName = require("../prompts/getFileName");
const getWrapperType = require("../prompts/getWrapperType");
const copyFile = require("../projectSetup/copyFile");
const initializeProject = require("../projectSetup/initializeProject");

// define a function to initialize a new Telegraf bot project
async function init() {
  const command = process.argv;

  if (command.length > 4) {
    logger.error("Too many inputs.");
    process.exit(1);
  }
  let wrapperName = command[2];
  let dirName = command[3];
  if (command.length == 4) {
    if (!isValidWrapper(wrapperName)) {
      logger.error("Wrapper is Incorrect/Unsupported.");
      wrapperName = await getWrapperType(rl);
    }
    if (!isValidFileName(dirName)) {
      logger.error("Invalid file name.");
      dirName = await getFileName(rl);
    }

    copyFile(dirName, wrapperName);
    initializeProject(dirName, wrapperName);
  }
  if (command.length == 3) {
    wrapperName = command[2];
    if (!isValidWrapper(wrapperName)) {
      logger.error("Wrapper is Incorrect/Unsupported.");
      wrapperName = await getWrapperType(rl);
    }
    dirName = await getFileName(rl);

    copyFile(dirName, wrapperName);
    initializeProject(dirName, wrapperName);
  }
  if (command.length == 2) {
    wrapperName = await getWrapperType(rl);
    dirName = await getFileName(rl);

    copyFile(dirName, wrapperName);
    initializeProject(dirName, wrapperName);
  }
  rl.close();
}

// export the init function for use in other modules
module.exports = {
  init,
};
