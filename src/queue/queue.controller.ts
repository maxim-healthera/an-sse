import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @EventPattern('notify-client')
  async notifyClient(data: { fileId: string; payload: any }) {
    const { fileId, payload } = data;
    this.queueService.notifyClient(fileId, payload);
    // this.appService.verifyAntiplagiat(data.fileId);
  }
}
