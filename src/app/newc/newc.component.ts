import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import { Msg } from './../model/msg.model';


@Component({
  selector: 'app-newc',
  template: `<input id="interval" #item />
  <button (click)="evenbtn(item)" >set interval</button>
 
  `,
  styleUrls: ['./newc.component.css']
})
export class NewcComponent implements OnInit {
@Input('message') public msg?:string;
@Output() tik=new EventEmitter();
@Input() mssg!:Msg;
keys:any;

  constructor() { }

  ngOnInit(): void {
  }
 
evenbtn(item){
  setInterval(()=>{
    this.tik.emit(this.msg)
   
  },parseInt(item);
  
}
}
