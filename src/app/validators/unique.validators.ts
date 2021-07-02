import { Subject, BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import User from '../interfaces/user.interface';
export default class UniqueValidators {
  static uniqueEmail(
    subject: BehaviorSubject<User[]>
  ): (control: FormControl) => { [key: string]: boolean } | null {
    return (control: FormControl) => {
      const users = subject.getValue()
      if (users.find((user) => user.email === control.value)) {
        return { uniqueEmail: true };
      }
      return null;
    };
  }
}
