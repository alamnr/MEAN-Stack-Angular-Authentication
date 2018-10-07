import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData= new User('','','','','',false,''); 
  showPass : boolean;

  constructor() {
    this.showPass = false;
   }

  ngOnInit() {
  }

  onClickPass(status:boolean){
    this.showPass = status;
  }

  login(){
    console.log(this.loginUserData);
  }

}
