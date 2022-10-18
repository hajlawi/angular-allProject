import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {

  constructor(private orderservice:OrdersService,
              private router:Router) { }

  ngOnInit(): void {
  }
onAddOrder(date,totalAmount,client) {
  date = new Date();
}
}
