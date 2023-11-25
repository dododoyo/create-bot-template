from telegram import Update
from telegram.ext import ContextTypes
from ..data.config import help_message
async def help(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(help_message)


