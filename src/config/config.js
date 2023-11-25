const supported_js_wrappers = [
  "grammy",
  "nestgram",
  "node_telegram",
  "puregram",
  "slimbot",
  "telebot",
  "telegraf",
];
// inside config
const supported_py_wrappers = ["python-telegram-bot", "PyTelegramBotAPI"];

const wrapper_dependencies = {
  grammy: ["grammy"],
  nestgram: [
    "@types/node",
    "eslint",
    "prettier",
    "typescript",
    "cross-env",
    "nodemon",
    "ts-node",
    "nestgram",
  ],
  node_telegram: ["node-telegram-bot-api"],
  puregram: ["puregram"],
  slimbot: ["slimbot"],
  telebot: ["telebot"],
  telegraf: ["telegraf"],
};

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
  ".",
];

module.exports = {
  supported_js_wrappers,
  supported_py_wrappers,
  invalidCharacters,
  wrapper_dependencies,
};
