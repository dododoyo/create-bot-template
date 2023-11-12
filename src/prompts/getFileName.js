const { logger } = require("../utils/logger");
const isValidFileName = require("../validation/isValidFileName")

async function getFileName(rl) {
  return new Promise((resolve) => {
    function askFileName() {
      rl.question("Please enter file name: ", async (fileName) => {
        console.log(fileName);
        const isValid = await isValidFileName(fileName);
     
        if (isValid !== true) {
          logger.error(`Invalid character " ${isValid} " in file name.\n`);
          askFileName();
        } else {
          logger.success(`Selected ${fileName} as file name.`);
          resolve(fileName);
        }
      });
    }
    askFileName();
  });
}

module.exports= getFileName;
