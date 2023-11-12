
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

- After running this command, you may see a message saying "Starting bot" or no message at all depending on the wrapper. 

- The bot is now running and will respond to `/start` and `/help` commands sent from Telegram.

- To ensure that the bot is working correctly, send `/start` and `/help` commands from you Telegram account to the bot. You should receive appropriate responses. 

- For further reference check [Nestgram's Website](https://degreetpro.gitbook.io/nestgram/guide)

- If you encounter any errors while starting bot feel free to contact the [developer]((https://t.me/dododoyo)) or create an [issue](https://github.com/dododoyo/create-bot-template/issues) on github.
