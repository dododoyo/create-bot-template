const child_process = require("child_process");
const { logger } = require("../utils/logger");
const {wrapper_dependencies} = require("../config/config.js")
async function initializeProject (newFileName,selectedWrapperName) {
  try {
    child_process.execSync(`cd ${newFileName} && npm init -y`, {
      stdio: "inherit",
    });
    logger.success("Successfully initialized npm package.\n");

    logger.info("Installing dependencies\n");
    child_process.execSync(`cd ${newFileName} && npm install dotenv`, {
      stdio: "inherit",
    });
    logger.success("Successfully installed dotenv\n");
    wrapper_dependencies[selectedWrapperName].forEach((eachDependency) => {
      child_process.execSync(
        `cd ${newFileName} && npm install ${eachDependency}`,
        {
          stdio: "inherit",
        }
      );
      logger.success(`Successfully installed ${eachDependency}.`);
    });
    logger.log()
    logger.success("Successfully created template!");
  } catch (error) {
    logger.error("Failed to install telegraf in the new project.");
    logger.realError(error);
  }
};

module.exports = initializeProject;
