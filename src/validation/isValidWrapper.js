const {supported_wrappers} = require("../config/config")
async function isValidWrapper(wrapperName) {
  return new Promise((resolve) => {
    resolve(supported_wrappers.includes(wrapperName));
  });
}

module.exports= isValidWrapper;