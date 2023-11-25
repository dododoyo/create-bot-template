import { Module } from 'nestgram';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  services: [AppService],
})
export class AppModule {}
