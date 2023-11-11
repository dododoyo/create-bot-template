// import the built-in file system module to interact with the file system
const fs = require("fs");
// import the built-in path module to work with file and directory paths
const path = require("path");

const { logger } = require("../utils/logger");

// define a function to recursively copy a directory and its contents
const copyInnerDir = (src, dest) => {
  // create the destination directory if it doesn't exist
  fs.mkdirSync(dest, { recursive: true });

  // get an array of directory entries (files and subdirectories) in the source directory
  let entries = fs.readdirSync(src, { withFileTypes: true });

  // iterate over each entry in the source directory
  for (let entry of entries) {
    // get the full path of the source file or subdirectory
    let srcPath = path.join(src, entry.name);

    // get the full path of the destination file or subdirectory
    let destPath = path.join(dest, entry.name);

    // if the entry is a subdirectory, recursively copy it and its contents
    if (entry.isDirectory()) {
      copyInnerDir(srcPath, destPath);
    }
    // if the entry is a file, copy it to the destination directory
    else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

function copyFile(fileName, selectedWrapper) {
  const newDirPath = path.join(process.cwd(), fileName);
  // create the new directory and its contents
  fs.mkdir(newDirPath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Could not create the directory ${fileName}.`, err);
      process.exit(1);
    }
    // get the path of the template directory
    const templatesDir = path.join(__dirname, `../../templates/${selectedWrapper}`);

    // get an array of files and subdirectories in the template directory
    fs.readdir(templatesDir, (err, files) => {
      if (err) {
        logger.error("Could not list the directory.");
        logger.realError(err);
        process.exit(1);
      }

      // iterate over each file or subdirectory in the template directory
      files.forEach((file) => {
        // get the full path of the source file or subdirectory
        const sourcePath = path.join(templatesDir, file);

        // get the full path of the destination file or subdirectory
        const destPath = path.join(newDirPath, file);

        // check if the entry is a file or subdirectory
        fs.stat(sourcePath, (err, stats) => {
          if (err) {
            logger.error(`Error reading ${file}.`);
            logger.realError(err);
          }
          // if the entry is a subdirectory, recursively copy it and its contents
          else if (stats.isDirectory()) {
            copyInnerDir(sourcePath, destPath);
          }
          // if the entry is a file, copy it to the destination directory
          else {
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
module.exports = copyFile