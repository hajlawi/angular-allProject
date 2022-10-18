import { Injectable } from '@angular/core';
import { Person} from "../../models/person.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons:Person[]=[];
  personSubject=new Subject<Person[]>();
  constructor() { }
  emitPerson(){
    this.personSubject.next(this.persons);
  }
  addPerson(newPerson: Person) {
    
  }

  getPersons() {
    
  }

  removePerson(person: Person) {
    
  }

  getSinglePerson(name: any) {
    
  }
}
