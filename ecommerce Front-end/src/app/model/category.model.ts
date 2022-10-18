import {Product} from "./product.model";

export interface Category{
  id:string;
  name:string;
  photo:string;
  description:string;
  products:Array<Product>;
  _embedded:{
    categories:Category[]
  };
  _links:{
    self:{
      href:string;
    },
    category:{
      href:string
    },
    products:{
      href:string;
    }
  }
}
