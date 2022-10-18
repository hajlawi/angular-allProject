import { Component, OnInit } from '@angular/core';
import {PersonsService} from "../../services/persons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../../../models/person.model";

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent implements OnInit {
  person;
  constructor(private personservice:PersonsService,
              private router:Router,
              private  activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.person=new Person('','','');
    const name=this.activeroute.snapshot.params['name'];
   /* this.personservice.getSinglePerson(name).then((person:Person)=>{
      this.person=Person;
    });*/
  }
  onBack(){
    this.router.navigate(['/persons']);
  }
}

