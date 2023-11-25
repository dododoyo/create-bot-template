"""
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

"""

import datetime

class Logger:
    def build_time(self):
        return datetime.datetime.now().strftime("%d.%m.%Y %H:%M:%S")

    def log(self, *texts):
        print(*texts)

    def success(self, *texts):
        print(f"\033[92m[BOT-TEMPLATE,{self.build_time()}]", "\033[0m", *texts)  # Green

    def info(self, *texts):
        print(f"\033[93m[BOT-TEMPLATE,{self.build_time()}]", "\033[0m", *texts)  # Yellow

    def question(self, *texts):
        print(f"\033[94m[BOT-TEMPLATE,{self.build_time()}]", "\033[0m", *texts)  # Blue

    def error(self, *texts):
        print(f"\033[91m[BOT-TEMPLATE,{self.build_time()}]", "\033[0m", *texts)  # Red

    def real_error(self, *texts):
        print("\033[41m[RealError]:", "\n\033[0m", *texts)  # White text with Red background

logger = Logger()