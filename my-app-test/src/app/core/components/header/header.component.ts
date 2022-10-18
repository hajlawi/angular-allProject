import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, Subject, Subscription, switchMap, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  sub$=new Subject<number>()
  obs$!:Observable<number>
  constructor() { }

  ngOnInit(): void {
   fromEvent(document,'click').subscribe(x=>interval(100).subscribe)
    
  }
ngOnDestroy(){
this.sub$.next(0)
}
}
