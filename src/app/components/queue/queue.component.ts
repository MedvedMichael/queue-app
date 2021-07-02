import { ChangeDetectionStrategy, Component } from '@angular/core';
import User from 'src/app/interfaces/user.interface';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class QueueComponent {
  queue: User[] = [];
  constructor(public queueService: QueueService) {
    this.queueService.arrChange.subscribe((value) => {
      this.queue = value;
    });
  }
}
