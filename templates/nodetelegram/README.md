### To start the bot, follow these steps:

1. **Set Up Environment Variables**: In the .env file located in your project's root directory add your bot token as follows:

```env
BOT_TOKEN=<your_bot_token_here>
```
Replace `your_bot_token_here` with your actual bot token.

- If the bot token received from [BotFather](https://t.me/botfather) was `123456789:aBcdEFgHIJklMnOpQRstUV` your `.env` file should look like this.

```env
BOT_TOKEN=123456789:aBcdEFgHIJklMnOpQRstUV
```

2. **Start the Bot**: Now, you can start the bot by running the `bot.js` file with Node.js. In your terminal, run:

```bash
node bot.js
```
- After running this command, if you see with no error logs, the bot is now running and will respond to `/start` and `/help` commands sent from Telegram.

- To ensure that the bot is working correctly, send `/start` and `/help` commands from you Telegram account to the bot. You should receive appropriate responses. 

- For further reference check [node-telegram-bot-api's Documentation](https://github.com/yagop/node-telegram-bot-api)

- If you encounter any errors while starting bot feel free to contact the [developer]((https://t.me/dododoyo)) or create an [issue](https://github.com/dododoyo/create-bot-template/issues) on github.
