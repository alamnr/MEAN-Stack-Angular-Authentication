import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData= new User('','','','','',false,''); 
  showPass : boolean;

  constructor(private auth: AuthService, private router: Router) {
    this.showPass = false;
   }

  ngOnInit() {
  }

  onClickPass(status:boolean){
    this.showPass = status;
  }

  login(){
    console.log(this.loginUserData);
    this.auth.loginUser(this.loginUserData).subscribe(
      (res)=>{
        console.log('@component Success-',res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/special']);
      },
      (err)=>{
        console.log('@component Error-',err);
      }
    );
  }

}
