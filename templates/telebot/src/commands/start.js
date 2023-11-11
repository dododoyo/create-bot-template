module.exports = (bot) => {
  bot.on(["/start"], (msg) => msg.reply.text("Hello, How may I be of service?"));
};
