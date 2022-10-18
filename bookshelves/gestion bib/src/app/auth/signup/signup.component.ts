import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {error} from "selenium-webdriver";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup;
  errorMessage:string;
  constructor(private authservice:AuthService,
              private formBuilder:FormBuilder,
              private router:Router){}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.signUpForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/[1-9a-zA-Z]{6,}/)]]
    });
  }
onSubmit(){
   const email=this.signUpForm.get('email').value;
  const password= this.signUpForm.get('password').value;
  this.authservice.createNewUser(email,password).then(()=>{
    this.router.navigate(['/books']);
  },error =>{
    this.errorMessage=error;
  });
}
}
