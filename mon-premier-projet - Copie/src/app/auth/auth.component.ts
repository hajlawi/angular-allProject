import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authstatus: boolean;

  constructor(private authService: AuthService, private  router: Router) { }

  ngOnInit(): void {
    this.authstatus= this.authService.isAuth;
  }
onSingIn() {
  this.authService.signIn().then(
    () => {
      console.log('sing in succefull');
      this.authstatus = this.authService.isAuth;
      this.router.navigate(['apareil']);
    });
}

onSingOut(){
  this.authService.signOut();
  this.authstatus=this.authService.isAuth;

}
}
