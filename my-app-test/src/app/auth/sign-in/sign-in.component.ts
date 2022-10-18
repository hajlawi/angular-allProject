import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { tap } from 'rxjs';
import { MatSnackBar, SimpleSnackBar, TextOnlySnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!:FormGroup;
  
  constructor(private authservice:AuthService,
  
    private router:Router,private snakBar:MatSnackBar){}

ngOnInit(): void {
this.initForm();
}

private initForm() {

this.signInForm = new FormGroup({
username:new FormControl(null,[Validators.required]),
password: new FormControl('',[Validators.required]),
roles:new FormControl('',[Validators.required]),

});
}
get username():FormControl{
  return this.signInForm.get('username') as FormControl
}
get password():FormControl{
  return this.signInForm.get('password') as FormControl
}
get roles():FormControl{
  return this.signInForm.get('roles') as FormControl
}
onSubmit() {
  this.authservice.signInUser(this.username.value,this.password.value).subscribe(()=>this.snakBar.
  open('user login succefully','close',{duration:2000,horizontalPosition:'right',verticalPosition:'top'}),
)
 

}
}