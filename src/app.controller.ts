import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('currentTime')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getCurrentTime(): any {
    return { date: new Date() };
  }
}

@Controller('getHello')
export class HelloAppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return 'Hello World';
  }
}
