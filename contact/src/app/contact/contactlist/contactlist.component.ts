import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Contact} from '../../models/contact.model';
import {ContactService} from '../../service/contact.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit, OnDestroy {
contacts: any=[];
contactSubscription: Subscription;
motcle:string="";
currentpage:number=0;
size:number=5
  pages:Array<number>;
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactSubscription = this.contactService.contactSubject.subscribe(
      (contacts: any) => {
        this.contacts = contacts;
      }
    );
    this.contactService.emitContact();

  }
Onfetch(){
  this.contactSubscription=this.contactService.getContact(this.motcle,this.currentpage,this.size).
  subscribe((data) => {
      this.contacts = data;
      this.pages =new Array(data.totalPages);

    });
  this.contactService.emitContact();

}
  ngOnDestroy() {
    this.contactSubscription.unsubscribe();
  }
goTopage(y:any){
  this.currentpage=y;
   this.Onfetch();
  this.contactService.emitContact();
}

  OnEditContact(id: number) {
    this.router.navigate(["contact/editcontact",id]);
  }

  OnDeleteContact(c:Contact) {
this.contactSubscription=this.contactService.deleteContact(c.id).subscribe(
  (data) =>{
       this.contacts.content.splice(
       this.contacts.content.indexof(c), 1);
     } );
  }


}
