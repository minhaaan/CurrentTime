import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloAppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloAppController],
  providers: [AppService],
})
export class AppModule {}
