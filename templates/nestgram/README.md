### To start the bot, follow these steps:

1. **Set Up Environment Variables**: In the .env file of your project root directory add your bot token like so:

```env
BOT_TOKEN=<your_bot_token_here>
```

Replace `your_bot_token_here` with your actual bot token.

2. **Set up package.json fields**: 

- Edit the `main` field in the `package.json` file to "src/main.ts".

```json 
  "main": "src/main.ts",
```
- Edit the `scripts` field in the `package.json` file with the code given below.
```json
  "scripts": {
    "prod": "cross-env NODE_ENV=production dist/main.js",
    "dev": "nodemon src/main.ts",
    "build": "rm -rf dist && tsc"
  },
```
- Add the type field to your `package.json` if it doesn't exit.
```json
  "type": "commonjs",
```

3. **Start the Bot**: Now, you can start the bot by running the `main.ts` file with Node.js. In your terminal, run:

```bash
npm run dev
```

After running this command, you should see the message "Starting bot" in your terminal. The bot is now running and will respond to `/start` and `/help` commands sent to the bot from telegram.

Remember to replace `your_bot_token_here` with the token you received from BotFather when you created your bot on Telegram.