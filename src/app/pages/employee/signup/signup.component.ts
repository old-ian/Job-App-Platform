import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  nextStep = false;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  first_name = new FormControl('', [Validators.required]);
  last_name = new FormControl('', [Validators.required]);
  showErrorMessage: boolean;
  constructor(public router: Router ) { }

  ngOnInit() {

  }

  getErrorMessage() {
    const password: string = this.password.value;
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    if (password.length < 6) {
      return 'Minimum password length is 6';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getContinueResponse() {
    if (this.first_name.hasError('required')) {
      return 'Please Enter your First Name';
    }

    if (this.last_name.hasError('required')) {
      return 'Please Enter your Last Name';
    }

    return '';
  }

  signUp() {
    this.router.navigate(['/signup/set-up']);
    if (this.getContinueResponse() !== '') {
      this.showErrorMessage = true;
    }

  }
}