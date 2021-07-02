import { Component, Input, OnInit } from '@angular/core';
import User from 'src/app/interfaces/user.interface';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: User;

  constructor(private queueService: QueueService) {}

  removeFromQueue() {
    this.queueService.removeUser(this.user.email);
  }
}
