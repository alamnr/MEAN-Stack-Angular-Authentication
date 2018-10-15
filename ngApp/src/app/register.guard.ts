import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router)
  {

  }
  canActivate(): boolean {
    console.log(this.router.url);
    if(this.authService.loggedIn()){
      this.router.navigate(['/unauthorize'],{queryParams:{code:'401'}});
      return false;
    }
    else{
      return true;
    }
  }
}
