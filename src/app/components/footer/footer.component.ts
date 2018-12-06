import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DatabaseService } from '../../database.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [DatabaseService, AuthenticationService]
})
export class FooterComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private email: String;
  constructor(
    private databaseService: DatabaseService,
    public authService: AuthenticationService) { this.authService.user.subscribe(user => {
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
