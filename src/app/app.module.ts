import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './new/new.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AboutComponent,
    NewComponent,
    ErrorpageComponent,
    AdduserComponent,
    EdituserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
