import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  model: any = { };
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [
        Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]],
      password: ['', [
        Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    alert('Registered successfully!!' + JSON.stringify(this.model));
    console.log('this.model', this.model);
    localStorage.setItem('regusername', this.model.username);
    localStorage.setItem('regpassword', this.model.password);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
  }
}
