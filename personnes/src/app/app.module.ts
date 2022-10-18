import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import  {Observable} from 'rxjs';

import {HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { PersonsComponent } from './persons/persons.component';
import { SinglePersonComponent } from './persons/single-person/single-person.component';
import { PersonFormComponent } from './persons/person-form/person-form.component';
import {PersonsService} from "./services/persons.service";

const appRoutes: Routes = [
  { path: 'persons', component: PersonsComponent },
  { path: 'person/new', component: PersonFormComponent },
  { path: 'person/view/:name', component: SinglePersonComponent },
  {path:'',redirectTo:'persons',pathMatch:'full'},
  {path:'**',redirectTo:'persons'}
];
@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    SinglePersonComponent,
    PersonFormComponent,
    HeaderComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
