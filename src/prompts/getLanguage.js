const { supported_languages } = require("../config/config");

const { logger } = require("../utils/js_logger");

async function getLanguage(rl) {
  return new Promise((resolve) => {
    function askLanguage() {
      supported_languages.forEach((eachLanguage, index) => {
        logger.log(`${index + 1}. ${eachLanguage}`);
      });

      rl.question("\nPlease select a language by its number: ", (input) => {
        const selectedNumber = Number(input);
        if (
          selectedNumber < 1 ||
          selectedNumber > supported_languages.length ||
          isNaN(selectedNumber)
        ) {
          logger.error("Invalid selection.\n");
          askLanguage();
        } else {
          logger.success(
            `Selected ${supported_languages[selectedNumber - 1]}\n`
          );
          resolve(supported_languages[selectedNumber - 1]);
        }
      });
    }
    askLanguage();
  });
}

module.exports = getLanguage;
