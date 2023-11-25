from ..data.config import help_message
def help(bot,message) -> None:
    bot.reply_to(message,help_message)


