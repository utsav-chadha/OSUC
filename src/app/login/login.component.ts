import { Component, OnInit, HostBinding  } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public user$ = this.authService.user;

  constructor(private authService: AuthService, private router: Router) { }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
    .subscribe(
      success => this.router.navigate(['/home']),
      error => alert(error),
    );
  }


  onSubmit(loginForm: NgForm) {

    const email = loginForm.value.email;
    const password = loginForm.value.password;

    this.authService.signIn(email, password)
    .subscribe(
      success => this.router.navigate(['/discussions']),
      error => alert(error),
    );



  }

  ngOnInit() {
  }



}
