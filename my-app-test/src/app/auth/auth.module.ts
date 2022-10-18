import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing-module';
import { SingUpComponent } from './sing-up/sing-up.component';
  import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    SignInComponent,
    SingUpComponent
  ],
  imports: [
  
CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class AuthAppModule { }
