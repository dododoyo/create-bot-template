# create-telegrambot

A simple package to create template files for a Telegram Bot.

## Installation

You don't need to install this package locally. You can use `npx` to run it directly:

## Usage

### Case-1 ( both name of wrapper and project  entered ) 

```bash
npx create-telegrambot <name-of-wrappert> <name-of-bot>
```
`npx create-telegrambot <name-of-wrapper> <name-of-bot>`: This command will create a new directory with the name `<name-of-bot>` and generate the necessary template files for a Telegram bot based on the wrapper that will be used to create the bot. **Please ensure the name is unique and does not conflict with existing directories.**

> Example = `create-telegrambot telegraf first-bot`

### Case-2  (only name of the wrapper is entered )

```bash
npx create-telegrambot <name-of-wrapper>
```

`npx create-telegrambot <name-of-bot>`: This command will create a prompt for the user to specify the name of project (e.g. `my-bot`) and generate the necessary template files for the bot. The `<name-of-bot>` argument is required and is used to specify the name of the directory that will be created. **Please ensure the name is unique and does not conflict with existing directories.**

> Example = `create-telegrambot grammy`

### Case-3 (with no entries)

```bash
npx create-telegrambot 
```
`npx create-telegrambot`: This command will create a prompt for the user to specify the name of project (e.g. `my-bot`) and the type of wrapper to use and generate the necessary template files for the bot based on the inputs. **Please ensure the name is unique and does not conflict with existing directories.**

> Inside `.env` replace `<name-of-bot>` with your actual bot token.


After running the above commands, the package will create the necessary template files for your Telegram bot.

```bash
cd <name-of-bot>
```

After navigating to your bot's directory with `cd <name-of-bot>`, you should find a README file inside. This README contains specific instructions and information about the bot template that has been generated.

To read the README, you can use a text editor or a markdown viewer. If you're using Visual Studio Code, you can simply open the README file in it and use the built-in markdown preview feature.

Please make sure to read the README carefully as it contains important information about how to configure and use your new bot.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
