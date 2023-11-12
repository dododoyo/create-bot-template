class Logger {
  buildTime() {
  const date = new Date();

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}
  log(...texts) {
    console.log(...texts);
  }
  success(...texts) {
    this.log("\x1b[32m%s\x1b[0m", `[BOT-TEMPLATE, ${this.buildTime()}]`, ...texts); // Green
  }
  info(...texts) {
    this.log("\x1b[33m%s\x1b[0m", `[BOT-TEMPLATE, ${this.buildTime()}]`, ...texts); // Yellow
  }
  question(...texts) {
    this.log("\x1b[34m%s\x1b[0m", `[BOT-TEMPLATE, ${this.buildTime()}]`, ...texts); // Blue
  }
  error(...texts) {
    this.log("\x1b[31m%s\x1b[0m", `[BOT-TEMPLATE, ${this.buildTime()}]`, ...texts); // Red
  }
  realError(...texts) {
    this.log("\x1b[41m%s\x1b[0m", "[RealError]: ", ...texts, "\n"); // White text with Red background
  }
}

const logger = new Logger();
module.exports = { Logger, logger };
