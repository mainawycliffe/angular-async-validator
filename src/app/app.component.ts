import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  frmLogin: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmLogin = this.createForm();
  }

  ngOnInit() {}

  hasError(field: string, error: string): boolean {
    return false;
  }

  createForm(): FormGroup {
    return this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
}
