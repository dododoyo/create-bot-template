const { logger } = require("../utils/logger");
const isValidFileName = require("../validation/isValidFileName")

async function getFileName(rl) {
  return new Promise((resolve) => {
    function askFileName() {
      rl.question("Please enter the file name: ", async (fileName) => {
        const isInvalid = await isValidFileName(fileName);
        console.log();
        if (isInvalid) {
          logger.error("Invalid characters in file name.\n");
          askFileName();
        } else {
          logger.success(`Selected ${fileName}\n as file name.`);
          resolve(fileName);
        }
      });
    }
    askFileName();
  });
}

module.exports= getFileName;
