import {ItemProduct} from "./item-product.model";

export interface Client{
  name:string;
  email:string;
  phoneNumber:string;
  address:string;
  username:string;
  items:Map<number,ItemProduct>;
}
