import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationForm2Component } from './registration-form2/registration-form2.component';
import { AmeExperienceComponent } from './ame-experience/ame-experience.component';
import { RegistrationForm3Component } from './registration-form3/registration-form3.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    CaptchaComponent,
    LoginComponent,
    RegistrationForm2Component,
    AmeExperienceComponent,
    RegistrationForm3Component,
    UserDashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
