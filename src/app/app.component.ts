import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Angular ' + VERSION.major;

  public formGroup: FormGroup;

  public formObject = {
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  };

  constructor() {
    this.formGroup = new FormGroup(this.formObject);
  }

  get f() {
    return this.formObject;
  }
}
