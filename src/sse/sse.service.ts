import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class SseService {
  private events = new Subject();

  addEvent(event) {
    this.events.next(JSON.stringify(event));
  }

  sendEvents() {
    return this.events.asObservable();
  }
}
