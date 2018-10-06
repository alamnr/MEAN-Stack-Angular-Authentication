import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData= new User('','',''); 
  showPass : boolean;
  showPassConfirm : boolean;

  constructor() {
    this.showPass = false;
    this.showPassConfirm = false;
   }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.registerUserData);
  }

  onClickPass(status:boolean){
    this.showPass = status;
  }

  onClickPassConfirm(status:boolean){
    this.showPassConfirm = status;
  }

}
