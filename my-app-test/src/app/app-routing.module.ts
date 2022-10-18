import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { SingleBookComponent } from './book/single-book/single-book.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
const routes:Routes=[
  {path:"book/view/:id",component:SingleBookComponent},
  {path:"book/edit/:id",component:EditBookComponent},
  {path:"book/books",component:BookListComponent},
  {path:"book/new",component:BookFormComponent}
 
 
  ]
@NgModule({
  imports:[RouterModule.forRoot(routes)],





exports: [RouterModule]
})
 
  export class AppRoutingModule {
  
 }
