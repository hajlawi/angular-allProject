import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {Person} from "../../../models/person.model";
import {PersonsService} from "../../services/persons.service";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  personForm:FormGroup;
  constructor(private router:Router,
              private personservice:PersonsService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.personForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onsavePerson(){
    const formValue = this.personForm.value;
    const newPerson = new Person(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
    );
    this.personservice.addPerson(newPerson);
    this.router.navigate(['/persons']);
  }

}
