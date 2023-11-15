# create-bot-template
[![Node.js Package](https://github.com/dododoyo/create-bot-template/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/dododoyo/create-bot-template/actions/workflows/npm-publish.yml)

**A simple package to create template files for a Telegram Bot.**


## Installation

- You don't need to install this package locally. You can use `npx` to run it directly:

## Usage

### Case-1 ( both wrapper name and project name entered) 

```bash
npx create-bot-template <name-of-wrapper> <name-of-bot>
```
- The above command will create a new directory with the name `<name-of-bot>` and generate the necessary template files for a Telegram bot based on the wrapper chosen by the user. **Please ensure the name of project is unique and does not conflict with existing directories.**

> Example: `create-bot-template telegraf first-bot`

- This command creates a new folder named 'first-bot' with template files for coding with the `Telegraf` wrapper.

### Case-2  (only name of the wrapper is entered )

```bash
npx create-bot-template <name-of-wrapper>
```

- The above command will create a prompt for the user to specify the name of project, and generate the necessary template files for the bot. The `<name-of-bot>` argument is required and is used to specify the name of the directory that will be created. **Please ensure the name is unique and does not conflict with existing directories.**

> Example `create-bot-template grammy`

### Case-3 (with no entries)

```bash
npx create-bot-template 
```
- The above command will create a prompt for the user to select the type of wrapper to use and specify the name of project, then it generates the necessary template files for the bot based on the inputs of the user. **Please ensure the name is unique and does not conflict with existing directories.**


> After running one of the above commands, the package will create the necessary template files for your Telegram bot.

> Next you should navigate to your newly created directory.
```bash
cd <name-of-bot>
```

- After navigating to your bot's directory with `cd <name-of-bot>`, you should find a README file inside. This README contains specific instructions and information about the bot template that has been generated.

- To read the README, you can use a text editor or a markdown viewer. If you're using Visual Studio Code, you can simply open the README file in it and use the built-in markdown preview feature.

- Please make sure to `read the README.md file carefully` as it contains important information about how to configure and use the boilerplate code.

## Contributing

- Contributions to `create-bot-template` are greatly appreciated! Whether it's reporting bugs, proposing new features, improving documentation, or contributing code, your help is always welcome.

- To contribute code, you can start by forking the repository, making your changes, and then submitting a Pull Request. Your Pull Request will be reviewed by the maintainers, and they will provide feedback or merge it if it's suitable.

- Thank you for your interest in improving `create-bot-template`!
