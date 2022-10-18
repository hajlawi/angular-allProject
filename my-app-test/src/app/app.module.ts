import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";

import {APP_BASE_HREF} from '@angular/common';
import { VidoPlayerComponent } from './vido-player/vido-player.component';

import { BookListComponent } from './book/book-list/book-list.component';
import { SingleBookComponent } from './book/single-book/single-book.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { NavbarComponent } from './book/book-list/navbar/navbar.component';
import { AuthAppModule } from './auth/auth.module';
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { httpInterceptorProviders } from './core/interceptor';
import { CoreModule } from './core/core.module';
import { NgrxModule } from './ngrx/ngrx.module';

@NgModule({
  declarations: [
    AppComponent,
   
    VidoPlayerComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    EditBookComponent,
    NavbarComponent,
  ],
  imports: [



AppRoutingModule,
  BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AuthAppModule,
    CoreModule,
    NgrxModule
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }