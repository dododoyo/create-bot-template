// enable strict mode to catch common coding mistakes and unsafe actions
"use strict";

// import the built-in file system module to interact with the file system
const fs = require("fs");

// import the built-in path module to work with file and directory paths
const path = require("path");

// import the built-in child_process module to spawn child processes
const child_process = require("child_process");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// list of supported wrappers
const supported_wrappers = [
  "grammy",
  "nodetelegram",
  "puregram",
  "slimbot",
  "telebot",
  "telegraf",
];
// // list of supported wrappers
// const supported_wrappers = [
//   "grammy",
//   "nestgram",
//   "nodetelegram",
//   "puregram",
//   "slimbot",
//   "telebot",
//   "telegraf",
// ];

const wrapper_dependencies = {
    "grammy":["grammy"],
  "nestgram":["nestgram"],
  "nodetelegram":["node-telegram-bot-api"],
  "puregram":["puregram"],
  "slimbot":["slimbot"],
  "telebot":["telebot"],
  "telegraf":["telegraf"],
}

const invalidCharacters = [
  "<",
  ">",
  ":",
  '"',
  "/",
  "\\",
  "|",
  "?",
  "*",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "(",
  ")",
  "`",
  "~",
  " ",
];

async function isValidWrapper(wrapperName) {
  return new Promise((resolve) => {
    resolve(supported_wrappers.includes(wrapperName));
  })
}

const initializeProject = (newFileName, selectedWrapperName) => {
  // initialize a new npm project and install the required dependencies
  try {
    child_process.execSync(`cd ${newFileName} && npm init`, {
      stdio: "inherit",
    });
    child_process.execSync(`cd ${newFileName} && npm install dotenv`, {
      stdio: "inherit",
    });
    wrapper_dependencies[selectedWrapperName].forEach((eachDependency) => {
          child_process.execSync(`cd ${newFileName} && npm install ${eachDependency}`, {
            stdio: "inherit",
          });
    })

    console.log("Succesfully created template !");

  } catch (error) {
    console.error("Failed to install telegraf in the new project.", error);
  }
};

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
    const templatesDir = path.join(__dirname, `templates/${selectedWrapper}`);

    // get an array of files and subdirectories in the template directory
    fs.readdir(templatesDir, (err, files) => {
      if (err) {
        console.error("Could not list the directory.", err);
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
            console.error(`Error reading ${file}.`, err);
          }
          // if the entry is a subdirectory, recursively copy it and its contents
          else if (stats.isDirectory()) {
            copyInnerDir(sourcePath, destPath);
          }
          // if the entry is a file, copy it to the destination directory
          else {
            fs.copyFile(sourcePath, destPath, (err) => {
              if (err) {
                console.error(`File ${file} could not be copied.`, err);
              }
            });
          }
        });
      });
      console.log(`Telegram template bot created successfully.`);
    });
  });
}

async function isValidFileName(fileName) {
  return new Promise((resolve) => {
    resolve(invalidCharacters.some((char) => fileName.includes(char)));
  });
}

async function getFileName() {
  return new Promise((resolve) => {
    function askFileName() {
      rl.question("Please enter the file name: ", async (fileName) => {
        const isInvalid = await isValidFileName(fileName);
        console.log();
        if (isInvalid) {
          console.log("Invalid file name. Please try again.");
          askFileName();
        } else {
          resolve(fileName);
        }
      });
    }
    askFileName();
  });
}

function getWrapperType() {
  return new Promise((resolve) => {
    function askWrapperType() {
      supported_wrappers.forEach((wrapper, index) => {
        console.log(`${index + 1}. ${wrapper}`);
      });

      rl.question(
        "Please select a wrapper by its number: ",
        (input) => {
          const selectedNumber = Number(input);

          if (
            selectedNumber < 1 ||
            selectedNumber > supported_wrappers.length ||
            isNaN(selectedNumber)
          ) {
            console.log("\nInvalid selection.\n");
            askWrapperType();
          } else {
            resolve(supported_wrappers[selectedNumber - 1]);
          }
        }
      );
    }
    askWrapperType();
  });
}

// define a function to initialize a new Telegraf bot project
async function init() {
  const command = process.argv;

  if (command.length > 4) {
    console.error("Too many inputs.");
    process.exit(1);
  }
  if (command.length == 4) {
    let wrapperName = command[2];
    let dirName = command[3];
    if (!isValidWrapper(wrapperName)) {
      console.log("Wrapper is Incorrect/Unsupported.");
      wrapperName = await getWrapperType();
    }
    if (!isValidFileName(dirName)) {
      console.log("Invalid file name.");
      dirName = await getFileName();
    }

    copyFile(dirName, wrapperName);
    initializeProject(dirName, wrapperName);
  }
  if (command.length == 3) {
    let wrapperName = command[2];
    if (!isValidWrapper(wrapperName)) {
      console.log("Wrapper is Incorrect/Unsupported.");
      wrapperName = await getWrapperType();
    }
    const fileName = await getFileName();

    copyFile(dirName, wrapperName);
    initializeProject(dirName, wrapperName);
  }
  if (command.length == 2) {
    let wrapperName = await getWrapperType();
    let dirName = await getFileName();

    copyFile(dirName, wrapperName);
    initializeProject(dirName, wrapperName);
  }
  rl.close();
}

// export the init function for use in other modules
module.exports = {
  init,
};
