import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationForm2Component } from './registration-form2/registration-form2.component';

const routes: Routes = [
  {path:'login',component:RegistrationFormComponent},
  
  {path:'registrationForm',component:RegistrationForm2Component},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
