import { Injectable } from '@angular/core';

import {catchError,Observable,map,tap,switchMap, throwError, of,filter} from "rxjs";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import { MatSnackBar, SimpleSnackBar, TextOnlySnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';
import { User } from './../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host=environment.host;
  public jwtToken!:string
users:User[]=[]
  constructor(private httpclient:HttpClient ,private snakBar:MatSnackBar) {

  }

 signInUser(username:string,password:string):Observable<User|undefined> {
return this.httpclient.get<User[]>(this.host + "/users").pipe(map(users=>[...users].find(u=>username==username&&u.password==password)),
map((usermap=>{
  if(usermap)
  this.jwtToken=JSON.stringify({username:usermap!.username,roles:usermap!.roles});
   localStorage.setItem('token',this.jwtToken)
   return usermap
})))

  }
  getAllUsers():Observable<User[]>{
    let hosting=environment.host
    return this.httpclient.get<User[]>(hosting+'/users')
}
  /* createNewUser(userForm:User):Observable<UserI>{

   return this.httpclient.post<UserI>(this.host + "/users",
          {username: userForm.username, password: userForm.password})
   
  }*/
 createNewUser(userForm:User):Observable<User>{
    let hosting=environment.host
   return this.httpclient.post<User>(this.host + "/users", userForm).pipe(tap(user=>this.snakBar.open('user create succefolly','close',{duration:2000,horizontalPosition:'right',verticalPosition:'top'}),
                                  catchError(e=>throwError(e))))

}

testRequest(route = "/assets/example-resource.json") {
  return this.httpclient.get(route);
}
getToken():string{
  return this.jwtToken
}
 /* saveToken(jwt:string){
    this.jwtToken=jwt;
    localStorage.setItem('token',jwt);

    let decode =jwt_decode(this.jwtToken);
    this.roles=decode.roles;

  }


  loadToken(){
    this.jwtToken=localStorage.getItem('token');
    return this.jwtToken;
  }


  signOutUser(){
    localStorage.removeItem('token');
    this.jwtToken=null;

  }
  tokenAdmin() {
    let roles=this.roles;
    for(let r of roles) {
      console.log(r)
      if(r=="ADMIN")
        return true;
      else
        return false
    }


  }


*/
}
