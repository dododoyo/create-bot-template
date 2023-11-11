// require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

// const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
const bot = new TelegramBot("6642856793:AAHbuY1AKlqIseezDlUwrHcmMZkUhBEOFbw", {
  polling: true,
});

// start command
const start_command = require("./src/commands/start.js");
start_command(bot);

// help command
const help_command = require("./src/commands/help.js");
help_command(bot);

