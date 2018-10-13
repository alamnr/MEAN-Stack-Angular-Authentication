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

import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {HttpClientModule, HTTP_INTERCEPTORS,} from '@angular/common/http'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ForbiddenValidatorDirective } from './shared/validator/forbidden-name-validator.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/validator/alter-ego.directive';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    ShowPasswordComponent,
    PhoneNumberDirective,
    CompareValidatorDirective,
    ForbiddenValidatorDirective,
    UniqueAlterEgoValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PasswordStrengthMeterModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},AuthGuard,AuthService,PhoneNumberDirective, {provide:RECAPTCHA_SETTINGS,useValue:{siteKey:'6LdkynMUAAAAADCPROILreORmyF-l6ONR5O-wclB'} as RecaptchaSettings}],
  bootstrap: [AppComponent]
})
export class AppModule { }
