import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData= new User('','','','','',false,''); 
  showPass : boolean;
  showPassConfirm : boolean;
  passStrengthText: string;
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];


  constructor(private authService: AuthService, private router: Router) {
    this.showPass = false;
    this.showPassConfirm = false;
    this.passStrengthText = '';
    
   }

  ngOnInit() {
  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
}

  receiveStrengthFromChildComponent(strengthChange:number, passText:string){
    const strength = {
      0: "Worst",
      1: "Bad",
      2: "Weak",
      3: "Good",
      4: "Strong"
    }
    if (passText !== "") {
      this.passStrengthText =  strength[strengthChange]; 
    } else {
      this.passStrengthText = "";
    }
  }
  
  /*
  getStrength(passText){

    const strength = {
      0: "Worst",
      1: "Bad",
      2: "Weak",
      3: "Good",
      4: "Strong"
    }
    let result = this.measureStrength(passText);
    // console.log(result);
    // console.log(passText);
      if (passText !== "") {
        this.passStrengthText =  strength[result]; 
      } else {
        this.passStrengthText = "";
      }
   
  }
  measureStrength(p: string): number {

    let force = 0;
    const regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    const flags = [lowerLetters, upperLetters, numbers, symbols];
    const passedMatches = flags.filter( (isMatchedFlag: boolean) => {
        return isMatchedFlag === true;
    }).length;

    force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    force += passedMatches * 10;

    // penality (short password)
    force = (p.length <= 6) ? Math.min(force, 10) : force;

    // penality (poor variety of characters)
    force = (passedMatches === 1) ? Math.min(force, 10) : force;
    force = (passedMatches === 2) ? Math.min(force, 20) : force;
    force = (passedMatches === 3) ? Math.min(force, 40) : force;

    
    if (force <= 10) {
      return 0;
  } else if (force <= 20) {
      return 1;
  } else if (force <= 30) {
      return 2;
  } else if (force <= 40) {
      return 3;
  } else {
      return 4;
  }
  }*/
  registerUser(){
    console.log(this.registerUserData);
    this.authService.registerUser(this.registerUserData).subscribe(
      res=>{
        console.log('@component success-',res); 
        localStorage.setItem('token',res.token);
        this.router.navigate(['/special']);
     },
      err=>{console.log('@component Error occured- ', err); });
  }

  onClickPass(status:boolean){
    this.showPass = status;
  }

  onClickPassConfirm(status:boolean){
    this.showPassConfirm = status;
  }

}
