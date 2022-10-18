import { Component, OnInit } from '@angular/core';
import {CaddyService} from "../services/caddy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Caddy} from "../model/caddy.model";
import {Subscription} from "rxjs";
import {AuthService} from "../services/auth.service";
import {CatalogsService} from "../services/catalogs.service";
import {ItemProduct} from "../model/item-product.model";
@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {
caddies:Caddy[];
  public caddy: Caddy;
  index:number;
  constructor(private catService: CatalogsService, private router: Router,
              public caddyService: CaddyService,private authService:AuthService) {
  }
  ngOnInit(): void {
   this.caddies= this.caddyService.loadCaddiesFromLocalStorage();
  this.caddy= this.caddyService.loadCaddyFromLocalStorage();
  if(!this.caddies){
   this.caddyService.defaultCaddy();
    this.caddies= this.caddyService.loadCaddiesFromLocalStorage();
    this.caddy= this.caddyService.loadCaddyFromLocalStorage();
  }}
  onAddCaddy() {
    this.caddyService.addNewCaddy();
  }
  onSelectCaddy(i) {
  this.caddy =  this.caddyService.selectCaddy(i);
this.index=i;
     }
  getTotal(i:number) {
    return this.caddyService.getTotalCurrentCaddy(i);
  }
  onRemoveProductFromCaddy(value: ItemProduct) {
  }
  onNewOrder() {

  }
}
