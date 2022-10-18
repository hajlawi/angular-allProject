import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from "../../models/contact.model";
import {thistle} from "color-name";
import {ContactService} from "../../service/contact.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit,OnDestroy {
 contact:Contact=new Contact();
  contactSubscription: Subscription;
  test:boolean=false;
  constructor(private contactservice:ContactService,private router:Router) { }

  ngOnInit(): void {
  }

  saveContact() {
    this.contactSubscription=this.contactservice.addContact(this.contact).subscribe(
      (data) => {

        this.test=true;

      });

  }

  ngOnDestroy(): void {
    this.contactSubscription.unsubscribe();
    console.log('erreur');
  }
}
