import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  username = '';
  password = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    localStorage.setItem('userName', this.username);
    localStorage.setItem('pass', this.password);
    this.router.navigateByUrl('/new');

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
  }
}
