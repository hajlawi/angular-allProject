import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact.model";
import {ContactService} from "../../service/contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  contact: Contact=new Contact();
  test = false;
idcontact:number;
  constructor(private contctservice:ContactService, private route:ActivatedRoute,private router:Router) {
    this.idcontact = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.contctservice.getContactParId(this.idcontact).subscribe(
      (data)=> {this.contact=data;
      },error=>{console.log(error);}
  );}
  editContact() {
this.contctservice.updatecontact(this.contact).subscribe(
  (data)=>{
    console.log(data);
    alert("mis a jour effectuer");
    this.router.navigate(['contact/contactlist']);
  },error=>{
    alert("erreur");

  }
);
  }
}
