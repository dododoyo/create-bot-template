const child_process = require("child_process");
const { logger } = require("../utils/js_logger");
const {wrapper_dependencies} = require("../config/config.js")
async function initializeProject (newFileName,languageSelected,selectedWrapperName) {
  switch (languageSelected) {
    case "python":
              try {
                child_process.execSync(`cd ${newFileName}`, {
                  stdio: "inherit",
                });
                logger.info("Installing dependencies\n");
                child_process.execSync(
                  `cd ${newFileName} && pip install python-dotenv`,
                  {
                    stdio: "inherit",
                  }
                );
                logger.success("Successfully installed dotenv\n");
                wrapper_dependencies[selectedWrapperName].forEach(
                  (eachDependency) => {
                    child_process.execSync(
                      `cd ${newFileName} && pip install ${eachDependency}`,
                      {
                        stdio: "inherit",
                      }
                    );
                    logger.success(`Successfully installed ${eachDependency}.`);
                  }
                );
                logger.log();
                logger.success("Successfully created template!");
              } catch (error) {
                logger.error(
                  "Failed to install dependencies of the new project."
                );
                logger.realError(error);
              }
      break;
    case "javaScript":
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
          wrapper_dependencies[selectedWrapperName].forEach(
            (eachDependency) => {
              child_process.execSync(
                `cd ${newFileName} && npm install ${eachDependency}`,
                {
                  stdio: "inherit",
                }
              );
              logger.success(`Successfully installed ${eachDependency}.`);
            }
          );
          logger.log();
          logger.success("Successfully created template!");
        } catch (error) {
          logger.error("Failed to install dependencies of the new project.");
          logger.realError(error);
        }

      break;
    case "typeScript":
              try {
                child_process.execSync(`cd ${newFileName} && npm init -y`, {
                  stdio: "inherit",
                });
                logger.success("Successfully initialized npm package.\n");

                logger.info("Installing dependencies\n");
                child_process.execSync(
                  `cd ${newFileName} && npm install dotenv`,
                  {
                    stdio: "inherit",
                  }
                );
                logger.success("Successfully installed dotenv\n");
                wrapper_dependencies[selectedWrapperName].forEach(
                  (eachDependency) => {
                    child_process.execSync(
                      `cd ${newFileName} && npm install ${eachDependency}`,
                      {
                        stdio: "inherit",
                      }
                    );
                    logger.success(`Successfully installed ${eachDependency}.`);
                  }
                );
                logger.log();
                logger.success("Successfully created template!");
              } catch (error) {
                logger.error(
                  "Failed to install dependencies of the new project."
                );
                logger.realError(error);
              }        try {
          child_process.execSync(`cd ${newFileName} && npm init -y`, {
            stdio: "inherit",
          });
          logger.success("Successfully initialized npm package.\n");

          logger.info("Installing dependencies\n");
          child_process.execSync(`cd ${newFileName} && npm install dotenv`, {
            stdio: "inherit",
          });
          logger.success("Successfully installed dotenv\n");
          wrapper_dependencies[selectedWrapperName].forEach(
            (eachDependency) => {
              child_process.execSync(
                `cd ${newFileName} && npm install ${eachDependency}`,
                {
                  stdio: "inherit",
                }
              );
              logger.success(`Successfully installed ${eachDependency}.`);
            }
          );
          logger.log();
          logger.success("Successfully created template!");
        } catch (error) {
          logger.error("Failed to install dependencies of the new project.");
          logger.realError(error);
        }
      break;
    default:
      console.log("Unknown language selected.");
  }

};

module.exports = initializeProject;
