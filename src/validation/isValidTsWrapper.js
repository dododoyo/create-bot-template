const { supported_ts_wrappers } = require("../config/config");
async function isValidTsWrapper(wrapperName) {
  return new Promise((resolve) => {
    resolve(supported_ts_wrappers.includes(wrapperName));
  });
}

module.exports = isValidTsWrapper;
