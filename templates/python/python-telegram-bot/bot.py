from dotenv import load_dotenv
import os
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler
load_dotenv()
from src.commands.help import help
from src.commands.start import start

app = ApplicationBuilder().token(os.getenv('BOT_TOKEN')).build();

app.add_handler(CommandHandler("start", start))
app.add_handler(CommandHandler("help", help))


##################################
# Starting bot for local testing # 
##################################

if __name__ == "__main__":
  try:
    print("Starting bot. . .")
    app.run_polling()
    pass
  except Exception as e:
    print("An Error Ocurred:")
    print(e)