import { Service } from 'nestgram';

@Service()
export class AppService {
  get helloWorldMessage(): string {
    return 'Hello, world!';
  }
}
