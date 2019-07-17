import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsernamesService } from './usernames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  frmAsyncValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usernameService: UsernamesService
  ) {
    this.frmAsyncValidator = this.createForm();
  }

  ngOnInit() {}

  hasError(field: string, error: string): boolean {
    if (error === 'any' || error === '') {
      return (
        this.frmAsyncValidator.controls[field].dirty &&
        this.frmAsyncValidator.controls[field].invalid
      );
    }

    // this.frmLogin.controls[field].pending;

    return (
      this.frmAsyncValidator.controls[field].dirty &&
      this.frmAsyncValidator.controls[field].hasError(error)
    );
  }

  // @TODO: Touch on Perfomance

  createForm(): FormGroup {
    return this.fb.group({
      username: [
        null,
        [Validators.required],
        [this.usernameService.userValidator()]
      ],
      username2: [
        // this updates on blur
        null,
        {
          validators: [Validators.required],
          asyncValidators: [this.usernameService.userValidator()],
          updateOn: 'blur'
        }
      ]
    });
  }
}
