import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { SseService } from '../sse/sse.service';

@Injectable()
export class QueueService {
  constructor(private readonly sseService: SseService) {}

  notifyClient(fileId: string, payload: any) {
    console.log({ fileId, payload });
    this.sseService.addEvent({ fileId, payload });
  }
}
