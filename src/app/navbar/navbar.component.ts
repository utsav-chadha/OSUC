import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) {
    authService.isAuthenticated().subscribe(
      success => this.isLoggedIn = success ,
    );
   }
   logOut() {
         this.authService.logout();
         this.router.navigate(['/login']);
      }
    loginNavigate() {
        this.router.navigate(['/login']);
     }
  ngOnInit() {
  }

}
