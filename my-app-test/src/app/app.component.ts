import { Component, Input, OnInit,OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { interval, zip, Subject, Observable,fromEvent,from, of,  merge,mergeAll, concat} from 'rxjs';
import {  tap, mergeMap, take,map, switchMap, filter,reduce,exhaustMap } from 'rxjs/operators';
import "reflect-metadata"
import { AuthService } from "./core/services/auth.service";
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html' ,
 
   styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
    constructor(private AuthService:AuthService){

}
ngOnInit(){
 } 

   }
   