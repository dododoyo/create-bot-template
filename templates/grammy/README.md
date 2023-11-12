### To start the bot, follow these steps:

1. **Create and Set Up Environment Variables**:

- Create a `.env` file in your project's root directory. 
```bash
touch .env
```
- Once the file is created, get your bot token from [BotFather](https://t.me/botfather):

- If the bot token received from [BotFather](https://t.me/botfather) was `123456789:aBcdEFgHIJklMnOpQRstUV` variable inside `.env` file should look like this.

```env
BOT_TOKEN=123456789:aBcdEFgHIJklMnOpQRstUV
```

2. **Start the Bot**: Now, you can start the bot by running the `bot.js` file with Node.js. In your terminal, run:

```bash
node bot.js
```

- After running this command, you will see a message saying "Starting bot. . ." with no error logs. This implies the bot is now running and will respond to `/start` and `/help` commands sent from Telegram.

- To ensure that the bot is working correctly, send `/start` and `/help` commands from you Telegram account to the bot. You should receive appropriate responses. 
  

- For further reference check [Grammy's Website](https://grammy.dev/guide/)

- If you encounter any errors while starting bot feel free to contact the [developer]((https://t.me/dododoyo)) or create an [issue](https://github.com/dododoyo/create-bot-template/issues) on github.
