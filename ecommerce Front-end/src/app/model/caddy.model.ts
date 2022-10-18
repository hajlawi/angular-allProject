import {ItemProduct} from './item-product.model';
import {Client} from './client.model';

export class Caddy{
  constructor( id:number,name:string)
  {this.name=name;
  this.id=id;}
 public id: number;
  public name:string;
  public items:Map<number,ItemProduct>=new Map();
  public client:Client;
}
