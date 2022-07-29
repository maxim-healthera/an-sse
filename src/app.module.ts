import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SseModule } from './sse/sse.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [ConfigModule.forRoot(), SseModule, QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
