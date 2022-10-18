export interface AppUser{
  id:string;
  username:string;
 password:string;

  _links:{
    self:{
      href:string;
    },
    appUser:{
      href:string
    },
    roles:{
      href:string;
    }
  }
}
