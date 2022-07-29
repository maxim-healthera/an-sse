import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';
import { SseModule } from '../sse/sse.module';

@Module({
  providers: [QueueService],
  controllers: [QueueController],
  exports: [QueueService],
  imports: [SseModule],
})
export class QueueModule {}
