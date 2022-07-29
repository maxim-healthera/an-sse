import { Body, Controller, Post, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';
import { SseService } from './sse.service';

@Controller('')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Sse('/sse')
  sse(): Observable<any> {
    // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
    return this.sseService.sendEvents().pipe(map(console.log));
  }

  @Sse('/sse/admin')
  adminMesssage(): Observable<any> {
    // return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
    return this.sseService.sendEvents().pipe(map(console.log));
  }
}
