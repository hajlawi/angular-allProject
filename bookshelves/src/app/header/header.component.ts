import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import * as firebase from "firebase";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isauth:boolean;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.isauth=true;
        }else {
          this.isauth=false;
        }
      }
    );

  }
OnsingOut(){
  this.authservice.signOutUser();
}
}
