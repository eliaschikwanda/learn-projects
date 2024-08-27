import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../services/services/authentication.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthenticationResponse} from "../../services/models/authentication-response";

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
    // another service
  ) {
  }

  login() {
    // first reset the current array
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res:AuthenticationResponse) : void => {
        // save the token
        this.router.navigate(['books'])
      },
      error: (err): void => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        } else {
          this.errorMsg.push(err.error.error())
        }
      }
    })
  }

  register() {
    this.router.navigate(['register'])
  }
}
