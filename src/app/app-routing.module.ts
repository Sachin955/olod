import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmeExperienceComponent } from './ame-experience/ame-experience.component';
import { HeaderComponent } from './header/header.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationForm2Component } from './registration-form2/registration-form2.component';
import { RegistrationForm3Component } from './registration-form3/registration-form3.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  
  {path:'', component:RegistrationFormComponent},
  {path:'header', component:HeaderComponent},
  {path:'registrationForm',component:RegistrationForm2Component},
  {path:'AME_Experience',component:AmeExperienceComponent},
  {path:'registration3',component:RegistrationForm3Component},
  {path:'dashboard',component:UserDashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
