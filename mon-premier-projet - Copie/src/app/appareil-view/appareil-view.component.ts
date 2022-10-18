import {Component, OnInit} from '@angular/core';
import {ApareilService} from '../service/appareil.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  apareils: any[];
  appareilSubscription: Subscription;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private apareilService: ApareilService) { }

  ngOnInit() {
    this.appareilSubscription = this.apareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.apareils = appareils;
      }
    );
    this.apareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.apareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.apareilService.switchOffAll();
    } else {
      return null;
    }
  }
  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
  onSave() {
    this.apareilService.saveAppareilsToServer();
  }
  onFetch() {
    this.apareilService.getAppareilsFromServer();
  }
}
