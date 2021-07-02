import { BackendQueueService } from './backend-queue.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  arrChange = new BehaviorSubject<User[]>([]);
  num = Math.random() * 100;
  constructor(private backendQueueService: BackendQueueService) {
    this.backendQueueService.getQueue().subscribe((queue) => {
      this.arrChange.next(queue);
    });
  }

  getQueue() {
    return this.arrChange.getValue();
  }

  shuffleQueue() {
    const queue = this.arrChange.getValue();
    queue.sort(() => Math.random() - 0.5);
    this.arrChange.next(queue);
  }

  addUser(user: User) {
    this.backendQueueService.addUserToQueue(user).subscribe(() => {
      this.arrChange.next([...this.arrChange.getValue(), user]);
    });
  }

  removeUser(email: string) {
    this.backendQueueService.removeUserFromQueue(email).subscribe(() => {
      const queue = this.arrChange.getValue();
      queue.splice(
        queue.findIndex((a) => a.email === email),
        1
      );
      this.arrChange.next(queue);
    });
  }
}
