import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  client: Client;
  clientForm: FormGroup;
  userForm: FormGroup;

  constructor(private router: Router,
              private fombuilder: FormBuilder,
              private clientservce: ClientService,
              private authservice: AuthService) {
  }

  ngOnInit(): void {
    this.intForm();
  }

  private intForm() {
    this.clientForm = this.fombuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      adresse: ['', Validators.required],
      phonenumber: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
    });
  }

  onSaveClient() {
    let username = this.clientForm.get('username').value
    let password = this.clientForm.get('password').value
    let repassword = this.clientForm.get('repassword').value
    let name = this.clientForm.get('name').value
    let email = this.clientForm.get('email').value
    let adresse = this.clientForm.get('adresse').value
    let phonenumber = this.clientForm.get('phonenumber').value
    if (this.authservice.loadToken()) {
      this.clientservce.saveClient({name, email, adresse, phonenumber}).then(() => {
        console.log('client enregistrer')
      });
    } else {
      this.authservice.createNewUser({username,password,repassword}).then(()=>{
        console.log('user enregistrer')
      });
     this.clientservce.saveClient({name, email, adresse, phonenumber}).then(() => {
        console.log('client enregistrer')
      });
    }
}
}
