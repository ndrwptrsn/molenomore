import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AuthenticationService]
})
export class AdminComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private email: String;
  constructor(private elementRef: ElementRef, public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        if (user.email === 'mgreen@molenomore.com') {
          this.isLoggedIn = true;
          this.email = user.email;
        } else if (user.email === 'peterson8000@gmail.com') {
          this.isLoggedIn = true;
          this.email = user.email;
        }
      }
    });
  }

  ngOnInit() {
  }

  login() {
      this.authService.login();
    }

  logout() {
      this.authService.logout();
    }

}
