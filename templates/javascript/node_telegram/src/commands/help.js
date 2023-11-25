const { help_message } = require("../data/config.js");
module.exports = (bot) => {
  bot.onText(/\/help/, (ctx) => {
    bot.sendMessage(ctx.chat.id, help_message);
  });
};
