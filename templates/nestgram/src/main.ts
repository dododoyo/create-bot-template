import { NestGram } from 'nestgram';
import { AppModule } from './app.module';
import dotenv from 'dotenv';

dotenv.config();

async function bootstrap(): Promise<void> {
  const bot: NestGram = new NestGram(process.env.BOT_TOKEN as string, AppModule);
  await bot.start();
}

bootstrap();
