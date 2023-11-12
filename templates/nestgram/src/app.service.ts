import { Service } from "nestgram";
import { help_message } from "./data/config";

@Service()
export class AppService {
  get startMessage(): string {
    return "Hello, How may I be of service?";
  }
  get helpMessage(): string {
    return help_message;
  }
}
