const {invalidCharacters} = require("../config/config")
async function isValidFileName(fileName) {
  return new Promise((resolve) => {
    resolve(invalidCharacters.some((char) => fileName.includes(char)));
  });
}

module.exports = isValidFileName