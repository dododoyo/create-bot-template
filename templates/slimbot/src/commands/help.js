const { help_message } = require("../data/config.js");

module.exports = async (bot) => {
  bot.on("message", (message) => {
    if (message.text.startsWith("/help")) {
      bot.sendMessage(message.chat.id, help_message);
    }
  });
};
