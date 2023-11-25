const {help_message} = require("../data/config.js")
module.exports = (bot) => {
  bot.on(["/help"], (msg) => msg.reply.text(help_message));
};
