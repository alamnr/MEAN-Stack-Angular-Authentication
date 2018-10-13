import { Component, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';
  authService : AuthService;
  constructor(private injetor:Injector){
    this.authService = injetor.get(AuthService);
  }
}
