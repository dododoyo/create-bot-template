// require("dotenv").config();

const { Telegram } = require("puregram");

const bot = new Telegram({
  token: process.env.TEST_BOT_TOKEN,
});



const { help_message } = require("./src/data/config.js");

// setup command hanlders
bot.updates.on("message", (ctx) => {
  if ((ctx.entities[0].type == "bot_command")){

    if (ctx.text && ctx.text.startsWith("/start")) {
      return ctx.send("Hello, How may I be of service?");
    } else if (ctx.text && ctx.text.startsWith("/help")) {
      return ctx.send(help_message);
    }
  }
});

async function start_bot() {
  try {
    // console.log("Starting bot. . .");
    // await bot.updates.startPolling();
    bot.updates.startPolling().then(() => console.log(`Bot started polling`));
  } catch (err) {
    console.log("An Error Ocurred: Restarting Bot");
    console.log(err);
  }
}

/**********************************
  start bot is for local testing 
*********************************/
start_bot();
