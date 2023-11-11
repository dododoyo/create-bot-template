# create-telegraf-bot
A simple package to create template files for a Telegram Bot.

## Installation

You don't need to install this package locally. You can use `npx` to run it directly:

```bash
npx create-telegraf-bot <name-of-your-bot>
```

Replace `<name-of-your-bot>` with your actual bot token.

For instance,
```bash
npx create-telegraf-bot chat-bot
```

## Usage

After running the above command, the package will create the necessary template files for your Telegram bot.

```bash
cd <name-of-your-bot>
```

For our instance used previously,
```bash
cd chat-bot
```

### To start the bot, follow these steps:

1. **Set Up Environment Variables**: In the `.env` file of your project root directory add your bot token like so:

```env
BOT_TOKEN=<your_bot_token_here>
```

Replace `<your_bot_token_here>` with your actual bot token.

2. **Start the Bot**: Now, you can start the bot by running the `bot.js` file with Node.js. In your terminal, run:

```bash
node bot.js
```

After running this command, you should see the message "Starting bot" in your terminal. The bot is now running and will respond to `/start` and `/help` commands sent to the bot from Telegram.

Remember to replace `<your_bot_token_here>` with the token you received from BotFather when you created your bot on Telegram.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
