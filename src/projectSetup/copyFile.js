const fs = require("fs");
const path = require("path");

const { logger } = require("../utils/js_logger");
const { supported_js_wrappers } = require("../config/config");
const { supported_ts_wrappers } = require("../config/config");
const { supported_py_wrappers } = require("../config/config");

const copyInnerDir = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });

  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyInnerDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

async function copyFile(fileName, languageSelected, selectedWrapper) {
  const newDirPath = path.join(process.cwd(), fileName);
  fs.mkdir(newDirPath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Could not create the directory ${fileName}.`, err);
      process.exit(1);
    }
    // let templatesDir = null;
    const templatesDir = path.join(
      __dirname,
      `../../templates/${languageSelected}/${selectedWrapper}`
    );
    fs.readdir(templatesDir, (err, files) => {
      if (err) {
        logger.error("Could not list the directory.");
        logger.realError(err);
        process.exit(1);
      }
      files.forEach((file) => {
        const sourcePath = path.join(templatesDir, file);
        const destPath = path.join(newDirPath, file);
        fs.stat(sourcePath, (err, stats) => {
          if (err) {
            logger.error(`Error reading ${file}.`);
            logger.realError(err);
          } else if (stats.isDirectory()) {
            copyInnerDir(sourcePath, destPath);
          } else {
            fs.copyFile(sourcePath, destPath, (err) => {
              if (err) {
                logger.error(`File ${file} could not be copied.`);
                logger.realError(err);
              }
            });
          }
        });
      });
    });
  });
}
module.exports = copyFile;
