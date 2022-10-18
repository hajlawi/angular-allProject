import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from "./services/auth.service";
import {CatalogsService} from "./services/catalogs.service";
import { CategoryComponent } from './category/category.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFormComponent } from './products-list/product-form/product-form.component';
import { SingleProductComponent } from './products-list/single-product/single-product.component';
import { CaddyComponent } from './caddy/caddy.component';
import {CaddyService} from "./services/caddy.service";
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientFormComponent } from './clients-list/client-form/client-form.component';
import { SingleClientComponent } from './clients-list/single-client/single-client.component';
import {ClientService} from "./services/client.service";
import { OrdersComponent } from './orders/orders.component';
import { NeworderComponent } from './orders/neworder/neworder.component';
import { SingleorderComponent } from './orders/singleorder/singleorder.component';

const appRoutes: Routes = [
  {path:'auth/signin',component:SigninComponent },
  {path:'auth/signup',component:SignupComponent},
  //{path : "categories",component : CategoryComponent},
  {path : "products",component : ProductsListComponent},
 // {path : "products/:id",component : ProductsListComponent},
  {path : "products/:p",component : ProductsListComponent},
  {path : "products/view/:id",component : SingleProductComponent},
  {path : "product/new",component : ProductFormComponent},
  {path : "caddy/new",component : CaddyComponent},
  {path : "client/new",component : ClientFormComponent},
  {path : "" ,redirectTo: "products", pathMatch : "full"},
  {path:'**',redirectTo:'products'}
 ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    CategoryComponent,
    ProductsListComponent,
    ProductFormComponent,
    SingleProductComponent,
    CaddyComponent,
    ClientsListComponent,
    ClientFormComponent,
    SingleClientComponent,
    OrdersComponent,
    NeworderComponent,
    SingleorderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [AuthService,CatalogsService,CaddyService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
