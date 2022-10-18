import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {PersonsService} from "../services/persons.service";
import {Person} from "../../models/person.model";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit,OnDestroy{
  persons:Person[];
  personSubscription:Subscription;
  constructor(private personservice:PersonsService,private router:Router) { }
  ngOnInit(): void {
    this.personSubscription=this.personservice.personSubject.subscribe((data:Person[])=>{
      this.persons=data;
    });
    this.personservice.getPersons();
  }
  onNewPerson(){
    this.router.navigate(['/person','new']);
  }
  ondeletePerson(person:Person){
    this.personservice.removePerson(person);
  }
  onViewPerson(name:string){
    this.router.navigate(['/person','view',name]);
  }

  ngOnDestroy(): void {
    this.personSubscription.unsubscribe();
  }
}

