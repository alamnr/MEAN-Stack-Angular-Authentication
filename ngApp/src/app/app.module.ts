import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowPasswordComponent } from './shared/component/show-password/show-password.component';
import { PhoneNumberDirective } from './shared/directive/phone-number.directive';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { CompareValidatorDirective } from './shared/validator/compare-validator.directive';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    ShowPasswordComponent,
    PhoneNumberDirective,
    CompareValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PasswordStrengthMeterModule
  ],
  providers: [PhoneNumberDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
