import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpclient:HttpClient) {}
  addNewOrder(){
   this.httpclient.get("http://localhost:8080/orders");
  }
}
