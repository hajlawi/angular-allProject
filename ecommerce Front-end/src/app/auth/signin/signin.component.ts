import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userForm:FormGroup;

errorMessage : string ;
  constructor(private  authservice: AuthService,
              private formBuilder : FormBuilder,
              private router :Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm=this.formBuilder.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    });
  }
  onSubmit(){
    let userForm=this.userForm.value;
    this.authservice.signInUser(userForm).subscribe((data)=>{
      let jwt=data.headers.get('authorization');
      this.authservice.saveToken(jwt);
      this.router.navigateByUrl('/categories')
    },error =>{
      this.router.navigate(['/auth','signin']);
      this.errorMessage=error;
    });
  }

  onSignup() {
    this.router.navigate(['/auth','signup']);
  }
}
