const { supported_wrappers } = require("../config/config");
const { logger } = require("../utils/logger");

async function getWrapperType(rl) {
  return new Promise((resolve) => {
    function askWrapperType() {
      supported_wrappers.forEach((wrapper, index) => {
        logger.log(`${index + 1}. ${wrapper}`);
      });

      rl.question("\nPlease select a wrapper by its number: ", (input) => {
        const selectedNumber = Number(input);
        if (
          selectedNumber < 1 ||
          selectedNumber > supported_wrappers.length ||
          isNaN(selectedNumber)
        ) {
          logger.error("Invalid selection.\n");
          askWrapperType();
        } else {
          logger.success(
            `Selected ${supported_wrappers[selectedNumber - 1]}\n`
          );
          resolve(supported_wrappers[selectedNumber - 1]);
        }
      });
    }
    askWrapperType();
  });
}
module.exports =  getWrapperType ;
