import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth-service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  confirmPass = '';

  @ViewChild('cp') confirmPassword: ElementRef;

  constructor(private authService: AuthService) { }

  onSubmit(signupForm: NgForm) {

    const email = signupForm.value.email;
    const password = signupForm.value.password;
    console.log(email , password);
    this.authService.signUp(email, password);

  }

  onPassChange() {
    this.confirmPass = '';



  }



  ngOnInit() {
  }

}
