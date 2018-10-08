import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData= new User('','','','','',false,''); 
  showPass : boolean;

  constructor(private auth: AuthService) {
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
        console.log('Success-',res);
      },
      (err)=>{
        console.log('Error-',err);
      }
    );
  }

}
