const {supported_js_wrappers} = require("../config/config")
async function isValidJSWrapper(wrapperName) {
  return new Promise((resolve) => {
    resolve(supported_js_wrappers.includes(wrapperName));
  });
}

module.exports= isValidJSWrapper;