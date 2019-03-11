import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    router.events.subscribe((val) => {
      // see also 
      this.isLoggedIn = this.authService.isLoggedIn;
    });
  }

}
