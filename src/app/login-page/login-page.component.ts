import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    loginOrEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.httpClient
      .post('http://dumyLogin/login', {
        login: this.loginOrEmail,
        password: this.password,
      })
      .subscribe((response) => {
        console.log(response);
      });
    console.log(this.loginForm);
  }

  get loginOrEmail() {
    return this.loginForm.get('loginOrEmail');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
