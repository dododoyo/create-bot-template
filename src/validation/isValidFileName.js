const { invalidCharacters } = require("../config/config");

async function isValidFileName(fileName) {
  return new Promise((resolve) => {
    for (let i = 0; i < fileName.length; i++) {
      for (let j = 0; j < invalidCharacters.length; j++) {
        if (fileName[i] === invalidCharacters[j]) {
          resolve(fileName[i])
        }
      }
    }
    resolve(true);
  });
}

module.exports = isValidFileName;
