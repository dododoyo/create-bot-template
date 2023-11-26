const { supported_js_wrappers } = require("../config/config");
const { supported_ts_wrappers } = require("../config/config");
const { supported_py_wrappers } = require("../config/config");

const { logger } = require("../utils/js_logger");

async function wrapperHelper(rl,wrapper_list) {
  return new Promise(async (resolve) => {
    wrapper_list.forEach((wrapper, index) => {
      logger.log(`${index + 1}. ${wrapper}`);
    });

    rl.question("\nPlease select a wrapper by its number: ", (input) => {
      const selectedNumber = Number(input);
      if (
        selectedNumber < 1 ||
        selectedNumber > wrapper_list.length ||
        isNaN(selectedNumber)
      ) {
        logger.error("Invalid selection.");
        wrapperHelper(rl,wrapper_list);
      } else {
        logger.success(`Selected ${wrapper_list[selectedNumber - 1]}\n`);
        resolve(wrapper_list[selectedNumber - 1]);
      }
    });
  });
}

async function askWrapperType(rl, selectedLanguage) {
  return new Promise(async (resolve) => {
    switch (selectedLanguage) {
      case `python`:
        resolve(await wrapperHelper(rl,supported_py_wrappers))
        break;
      case `javascript`:
        resolve(await wrapperHelper(rl,supported_js_wrappers));
        break;
      case `typescript`:
        resolve(await wrapperHelper(rl,supported_ts_wrappers));
        break;
      default:
        logger.error(`Unknown language selected.`);
    }
  });
}
async function getWrapperType(rl, selectedLanguage) {
  return new Promise(async (resolve) => {
    const wrapperType = await askWrapperType(rl, selectedLanguage);
    resolve(wrapperType);
  });
}
module.exports = getWrapperType;
