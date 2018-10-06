import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-password',
  template: `
  <span  class="field-icon float-right" [ngClass]="passEyeStatus ? 'fa fa-eye' : 'fa fa-eye fa-eye-slash'" data-toggle="tooltip" data-placement="top" [title]="passEyeStatus?'Hide password':'Show password'"  (click)="togglePassword()"></span>
  `,
  styles: [ ]
})
export class ShowPasswordComponent implements OnInit {

  @Output() isShowPass =  new EventEmitter<boolean>();
  passEyeStatus: boolean;

  constructor() {
    this.passEyeStatus = false;
   }

  ngOnInit() {
  }

  togglePassword() {
    this.passEyeStatus = !this.passEyeStatus;
    this.isShowPass.emit(this.passEyeStatus);
 }

}
