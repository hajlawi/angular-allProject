import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpclient:HttpClient) {
  }
  saveClient(clientForm){
    return new Promise(
      (resolve, reject) => {
        this.httpclient.post("http://localhost:8080/clients",
          {name: clientForm.name, adresse: clientForm.adresse, email: clientForm.email,phoneNumber: clientForm.phonenumber})
          .subscribe((res:any)=>{
            resolve(res);
          }, err => {
            reject("********" + err);
          });
      }
    );
  }
}
