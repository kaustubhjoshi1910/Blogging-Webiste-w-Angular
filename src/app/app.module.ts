import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalisePipe } from './capitalise.pipe';
import { AuthService } from './auth.service';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';


let  firebaseConfig = {
  apiKey: "AIzaSyBlCNoePo6IVLUSC_xhjXF6zxzqD7yOqI0",
  authDomain: "lifestyletears-a5645.firebaseapp.com",
  databaseURL: "https://lifestyletears-a5645.firebaseio.com",
  projectId: "lifestyletears-a5645",
  storageBucket: "lifestyletears-a5645.appspot.com",
  messagingSenderId: "123643297389",
  appId: "1:123643297389:web:3ca2ac288afb24db954964",
  measurementId: "G-FQC6CQMRK6"
};

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalisePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
