import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../services/services/authentication.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthenticationResponse} from "../../services/models/authentication-response";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email: '', password: ''} // Will hold the credentials
  errorMsg: Array<string> = []; // In case we have something returned from the backend

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {
  }

  login() {
    // first reset the current array
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res:AuthenticationResponse) : void => {
        // When you assign a value to this.tokenService.token, it automatically calls this setter method.
        this.tokenService.token = res.token as string;
        this.router.navigate(['books'])
      },
      error: (err): void => {
        console.log(err);
        // validation errors is the response that we're getting
        // The error messages formed by the validation errors
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        } else {
          // The error msgs in the business
          this.errorMsg.push(err.error.error)
        }
      }
    })
  }

  register() {
    this.router.navigate(['register'])
  }
}
