import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm:FormGroup;
  errormessage:string;
  constructor( private authservice:AuthService, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.signinForm =this.formbuilder.group(
      {
        email: ['' , [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      });
  }
  onSubmit(){
    const email=this.signinForm.get('email').value;
    const password= this.signinForm.get('password').value;
    this.authservice.signInUser(email,password).then(()=>{
      this.router.navigate(['/books']);
    },error =>{
      this.errormessage=error;
    });
  }
}
