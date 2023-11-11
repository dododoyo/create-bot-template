const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { logger } = require("../utils/logger");
const isValidFileName = require("../validation/isValidFileName")

async function getFileName() {
  return new Promise((resolve) => {
    function askFileName() {
      rl.question("Please enter the file name: ", async (fileName) => {
        const isInvalid = await isValidFileName(fileName);
        console.log();
        if (isInvalid) {
          logger.error("Invalid characters in file name.\n");
          askFileName();
        } else {
          logger.success(`Selected ${fileName}\n`);
          resolve(fileName);
        }
      });
    }
    askFileName();
  });
}

module.exports= getFileName;
