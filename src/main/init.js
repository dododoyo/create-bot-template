// enable strict mode to catch common coding mistakes and unsafe actions
"use strict";
const { logger } = require("../utils/js_logger");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isValidJSWrapper = require("../validation/isValidJSWrapper");
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
    const isValidJSWrapperName = await isValidJSWrapper(wrapperName);
    if (!isValidJSWrapperName) {
      logger.error("Wrapper is Incorrect/Unsupported.");
      wrapperName = await getWrapperType(rl);
    }
    const isValidName = await isValidFileName(dirName);
    if (isValidName !== true) {
        logger.error(`Invalid character " ${isValidName} " in file name.\n`);
      dirName = await getFileName(rl);
    }

    copyFile(dirName, wrapperName);
    initializeProject(dirName, wrapperName);
  }
  if (command.length == 3) {
    wrapperName = command[2];
    const isValidJSWrapperName = await isValidJSWrapper(wrapperName);
    if (!isValidJSWrapperName) {
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

module.exports = {
  init,
};
