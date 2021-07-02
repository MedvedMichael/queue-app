import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { QueueService } from 'src/app/services/queue.service';
import UniqueValidators from 'src/app/validators/unique.validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [],
})
export class UserFormComponent {
  form!: FormGroup;
  constructor(public queueService: QueueService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        UniqueValidators.uniqueEmail(this.queueService.arrChange),
      ]),
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      this.queueService.addUser(this.form.value);
      this.form.reset();
    }
  }
}
