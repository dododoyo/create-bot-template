const { supported_py_wrappers } = require("../config/config");
async function isValidPyWrapper(wrapperName) {
  return new Promise((resolve) => {
    resolve(supported_py_wrappers.includes(wrapperName));
  });
}

module.exports = isValidPyWrapper;
