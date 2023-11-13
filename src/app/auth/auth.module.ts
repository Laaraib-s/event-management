import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ContactusComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
