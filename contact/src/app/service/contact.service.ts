import {Injectable, OnInit} from "@angular/core";
import {Contact} from '../models/contact.model';
import  "rxjs//add/operator/map";
import {Http,Headers, Response} from "@angular/http";
import {Subject} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class  ContactService {
 private contacts: any ;
  contactSubject = new Subject<any>();
   
  constructor(private http: Http) {

  }

  emitContact() {
    this.contactSubject.next(this.contacts);
  }

  getContact(motcle:string,page:number,size:number) {
   
    return this.http.get("http://localhost:8080/chercher?mc="+motcle+"&page="+page+"&size="+size)
      .map(resp => resp.json());
    this.emitContact();
  }
  addContact(contact: Contact)
  {
    return this.http.post("http://localhost:8080/contact", contact)
  .map(resp=>resp.json());

  }
  getContactParId(id:number){

    return this.http.get("http://localhost:8080/contact/" +id)
      .map(resp=>resp.json());
  }
  updatecontact(contact:Contact){

    return this.http.put("http://localhost:8080/contact/" + contact.id, contact)
      .map(resp =>resp.json());
  }
  deleteContact(id:number){
    return this.http.delete("http://localhost:8080/contact/" + id)
      .map(resp =>resp.json());}
}
