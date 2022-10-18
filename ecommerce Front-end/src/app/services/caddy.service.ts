import {Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Caddy} from "../model/caddy.model";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product.model";
import {Subject} from "rxjs";
import {promise} from "selenium-webdriver";
import {ItemProduct} from "../model/item-product.model";
import {AuthService} from "./auth.service";
import {Client} from "../model/client.model";
@Injectable({
  providedIn: 'root'
})
export class CaddyService {
  listCaddies:Caddy[]=[];
  index=1;
 caddy: Caddy;
  constructor(private authService: AuthService) {
  }
  defaultCaddy(){
 const newCaddy=new Caddy(this.index,"caddy"+1);
    this.listCaddies=[newCaddy];
    this.caddy=newCaddy;
    localStorage.setItem('myCaddy',JSON.stringify(this.caddy));
    localStorage.setItem("ListCaddies_",JSON.stringify(this.listCaddies));
  }
addNewCaddy(){
    //const id=this.listCaddies[(this.listCaddies.length - 1)].id + 1
  this.index+=1;
  const newCaddy =new Caddy(this.index,"caddy"+this.index);
  this.listCaddies.push(newCaddy);
  localStorage.setItem("ListCaddies_",JSON.stringify(this.listCaddies));

}
selectCaddy(i:number){
    this.index=i;
  this.caddy=this.listCaddies[i];
  localStorage.setItem('myCaddy',JSON.stringify(this.caddy));
  return this.caddy;
}

  public addProductToCaddy(id:number,name:string,price:number,quantity:number):void{
    let caddy=this.listCaddies[this.index];
    let item=caddy.items[id];
    if(item===undefined) {
      item=new ItemProduct();
      item.id=id;item.name=name;
      item.price=price;item.quantity=quantity;
      this.listCaddies[this.index].items[id]=item;
      this.caddy=this.listCaddies[this.index];
    }
    else{
      item.quantity+=quantity;
    }
    console.log(this.listCaddies)
  }
  public addProduct(product:Product){
    this.addProductToCaddy(product.id,product.name,product.currentPrice,product.quantity);
    localStorage.setItem('myCaddy',JSON.stringify(this.caddy));
    localStorage.setItem("ListCaddies_",JSON.stringify(this.listCaddies));

  }
  public loadCaddiesFromLocalStorage(){
    let myCaddiesList=localStorage.getItem("ListCaddies_");
    this.listCaddies=JSON.parse(myCaddiesList);
    return this.listCaddies;
  }
  public loadCaddyFromLocalStorage(){
  let cad=localStorage.getItem("myCaddy");
  this.caddy=JSON.parse(cad);
  return this.caddy;

  }
  getTotalCurrentCaddy(i:number) {
   // let caddy=this.listCaddies[i];
   // let total=0;
   // for(let key in caddy.items ){
     // total+=caddy.items[key].price*caddy.items[key].quantity;
    //}
    //return total;
  }
}
