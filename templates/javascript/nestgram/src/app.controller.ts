import { Controller, OnCommand } from "nestgram";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @OnCommand("start")
  async start(): Promise<string> {
    return this.appService.startMessage;
  }
  @OnCommand("help")
  async help(): Promise<string> {
    return this.appService.helpMessage;
  }
}
