from dotenv import load_dotenv
import os
from src.commands.help import help
from src.commands.start import start
from telebot import TeleBot

load_dotenv()

bot = TeleBot(os.getenv('BOT_TOKEN'), parse_mode=None) 

#something wrong with async await in handlers
@bot.message_handler(commands=['start',])
def start_handler(message):
  start(bot,message)

@bot.message_handler(commands=['help',])
def help_handler(message):
  help(bot,message)

##################################
# Starting bot for local testing # 
##################################

if __name__ == "__main__":
  try:
    print("Starting bot. . .")
    bot.infinity_polling()
    pass
  except Exception as e:
    print("An Error Ocurred:")
    print(e)