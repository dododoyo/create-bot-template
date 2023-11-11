module.exports = (bot) => {
  bot.onText(/\/start/, (ctx) => {
    bot.sendMessage(ctx.chat.id,"Hello, How may I be of service?");
  });
};
