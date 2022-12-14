import { Subject } from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApareilService{
  appareilsSubject = new Subject<any[]>();
   private appareils = [
     {
       id:1,
       name: 'Machine à laver',
       status: 'éteint'
     },
     {
       id:2,
       name: 'Frigo',
       status: 'allumé'
     },
     {
       id:3,
       name: 'Ordinateur',
       status: 'éteint'
     }
   ];
   constructor( private httpClient: HttpClient){}
  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }
   getAppareilById(id: number) {
     const appareil = this.appareils.find(
       (s) => {
         return s.id === id;
       }
     );
     return appareil;
     this.emitAppareilSubject();
   }
   switchOnAll() {
     for(let appareil of this.appareils) {
       appareil.status = 'allumé';
       this.emitAppareilSubject();
     }
   }

   switchOffAll() {
     for(let appareil of this.appareils) {
       appareil.status = 'éteint';
       this.emitAppareilSubject();
     }
   }
   switchOnOne(i: number) {
     this.appareils[i].status = 'allumé';
   }

   switchOffOne(i: number) {
     this.appareils[i].status = 'éteint';
   }
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
  saveAppareilsToServer() {
    this.httpClient
      .put('https://projet-firebase-b33bd.firebaseio.com//appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur !:' + error);
        }
      );
  }
  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>("https://projet-firebase-b33bd.firebaseio.com//appareils.json")
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
 }
