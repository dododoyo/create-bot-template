### To start the bot, follow these steps:

1. **Set Up Environment Variables**: In the .env file of your project root directory add your bot token like so:

```env
BOT_TOKEN=<your_bot_token_here>
```

Replace `your_bot_token_here` with your actual bot token.

2. **Start the Bot**: Now, you can start the bot by running the `bot.js` file with Node.js. In your terminal, run:

```bash
node bot.js
```

After running this command, you should see the message "Starting bot" in your terminal. The bot is now running and will respond to `/start` and `/help` commands sent to the bot from telegram.

Remember to replace `your_bot_token_here` with the token you received from BotFather when you created your bot on Telegram.