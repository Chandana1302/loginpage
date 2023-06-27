import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Route,Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder,private router:Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email,Validators.pattern('chandanamenta@gmail.com')]],
    password: ['', [Validators.required, Validators.pattern('M#24062003ck')]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      alert("Enter valid details");
    }
    if (this.loginForm.valid) {
      alert("Login successfull");
      this.router.navigate(['/dashboard']);
    }
}
  }
