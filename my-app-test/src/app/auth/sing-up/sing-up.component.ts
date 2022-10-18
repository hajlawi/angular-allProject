import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { tap } from 'rxjs';
class customerValidation{
  static passwordvalidNumber(control:AbstractControl):any{
    const regex=/\d/;
    return regex.test(control.value) && control.value!==null?null:{passwordInvalid:true}
  }
}
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  signUpForm!:FormGroup;
  constructor(private authservice:AuthService,
              private formBuilder:FormBuilder,
              private router:Router){}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
  
    this.signUpForm = this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
 
    });
  }

  onSubmit() {
    
    // const userForm=;
    this.authservice.createNewUser(this.signUpForm.value).pipe(tap(()=>this.router.navigateByUrl('login'))).subscribe(console.log)
  }
}
