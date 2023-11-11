module.exports = async (bot) => {
  bot.on("message", (message) => {
    if (message.text.startsWith("/start")) {
      bot.sendMessage(message.chat.id, "Hello, How may I be of service?");
    }
  });
};
