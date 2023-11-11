module.exports = async (bot) => {
  bot.command(["start"], async (ctx) => {
    ctx.reply("Hello, How may I be of service?");
  });
};
