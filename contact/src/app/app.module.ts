import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './service/auth-guard.service';
import {Observable} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactformComponent } from './contact/contactform/contactform.component';
import {ContactlistComponent} from './contact/contactlist/contactlist.component';
import {ContactService} from "./service/contact.service";

import {HttpModule} from "@angular/http";
import { CommonModule } from '@angular/common';
import { EditcontactComponent } from './contact/editcontact/editcontact.component';
import {DeleteContactComponent} from "./delete-contact/delete-contact.component";

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'contact/contactform', component: ContactformComponent },
  { path: 'contact/contactlist', component: ContactlistComponent },
  { path: 'contact/editcontact/:id', component: EditcontactComponent },
  { path: 'deletecontact/:id', component: DeleteContactComponent },
  { path: 'about,canActivate' , component: AboutComponent},
  {path: '', redirectTo: 'contact', pathMatch: 'full'},
  {path: '**', redirectTo: 'contact'}
];



@NgModule({
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    ContactformComponent,
    ContactlistComponent,
    EditcontactComponent,
    DeleteContactComponent

  ],
  imports: [
    CommonModule ,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [ AuthService, AuthGuard, ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
