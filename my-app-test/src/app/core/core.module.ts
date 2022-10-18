import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { httpInterceptorProviders } from './interceptor';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [

  CommonModule
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},  httpInterceptorProviders ],
})
export class CoreModule { }
