import { Component, OnInit, Pipe } from '@angular/core';
import { interval, take,fromEvent } from 'rxjs';
import { Msg } from './model/msg.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message='';
  messg!:Msg
  counter=1;
  constructor(){} 
  counterTik(e:any){
   this.message=e;
  
  
}
ngOnInit(){
//this.messg=new Msg(1,"toto");
const click=fromEvent(document,'click');
click.pipe(switchMap(()=> interval(1000))).subscribe((x)=>{console.log(x)})

}

}