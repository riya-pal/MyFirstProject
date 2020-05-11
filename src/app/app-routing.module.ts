import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CheckLoginCredentials } from './checklogincredentials';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', component: LoginComponent },
  { path: 'new', component: NewComponent, canActivate: [CheckLoginCredentials] },
  { path: 'errorpage', component: ErrorpageComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'edituser', component: EdituserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
