// // list of supported wrappers with nestgram
// const supported_wrappers = [
//   "grammy",
//   "nestgram",
//   "nodetelegram",
//   "puregram",
//   "slimbot",
//   "telebot",
//   "telegraf",
// ];

const wrapper_dependencies = {
  grammy: ["grammy"],
  nodetelegram: ["node-telegram-bot-api"],
  puregram: ["puregram"],
  slimbot: ["slimbot"],
  telebot: ["telebot"],
  telegraf: ["telegraf"],
};


// list of supported wrappers
const supported_wrappers = [
  "grammy",
  "nodetelegram",
  "puregram",
  "slimbot",
  "telebot",
  "telegraf",
];

const invalidCharacters = [
  "<",
  ">",
  ":",
  '"',
  "/",
  "\\",
  "|",
  "?",
  "*",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "(",
  ")",
  "`",
  "'",
  "~",
  " ",
];

module.exports = {
  supported_wrappers,invalidCharacters,wrapper_dependencies
}