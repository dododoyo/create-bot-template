require("dotenv").config();

const Slimbot = require("slimbot");
const bot = new Slimbot(process.env.BOT_TOKEN);

// start command
const start_command = require("./src/commands/start.js");
start_command(bot);

// help command
const help_command = require("./src/commands/help.js");
help_command(bot);

async function start_bot() {
  try {
    console.log("Starting bot. . .");
    await bot.startPolling();
  } catch (err) {
    console.log("An Error Ocurred: Restarting Bot");
    start_bot()
    console.log(err);
  }
}

/**********************************
  start bot is for local testing 
*********************************/
start_bot();
