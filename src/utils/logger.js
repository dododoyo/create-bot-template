class Logger {
  log(...texts) {
    console.log(...texts);
  }

  success(...texts) {
    this.log("\x1b[32m%s\x1b[0m", "[CREATE-BOT-TEMPLATE]:", ...texts); // Green
  }

  info(...texts) {
    this.log("\x1b[33m%s\x1b[0m", "[CREATE-BOT-TEMPLATE]:", ...texts); // Yellow
  }
  question(...texts) {
    this.log("\x1b[34m%s\x1b[0m", "[CREATE-BOT-TEMPLATE]:", ...texts); // Blue
  }
  error(...texts) {
    this.log("\x1b[31m%s\x1b[0m", "[CREATE-BOT-TEMPLATE]:", ...texts); // Red
  }

  realError(...texts) {
    this.log("\x1b[41m%s\x1b[0m", "[RealError]: ", ...texts, "\n"); // Red on white background
  }
}

const logger = new Logger();
module.exports = { Logger, logger };
