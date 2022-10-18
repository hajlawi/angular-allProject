import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from '../../core/services/bookService';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookForm!:FormGroup
  bookId!:number
  
    constructor(private bookService:BookService,private formBuilder:FormBuilder,
                private router:Router,private activeRoute:ActivatedRoute) { }
    ngOnInit(): void {
      this.bookId=+this.activeRoute.snapshot.params['id']
    
      this.intiForm()
    }
    get f(): { [key: string]: AbstractControl } {
      return this.bookForm.controls;
    }
    intiForm(){
      
      this.bookService.getBookById(this.bookId).pipe(
        map(updatedbook=>{this.bookForm=this.formBuilder.group({
          id:updatedbook.id,
        title:[updatedbook.title,[Validators.required,Validators.minLength(6)]],
        author:[updatedbook.author,[Validators.required]],
        dateLocation:new Date(),
        available:[updatedbook.available,[Validators.required]],
        selected:[updatedbook.selected,[Validators.required]],
      })})).subscribe()
      
      
    }
    onSubmitForm(){

      this.bookService.updateBook(this.bookForm.value).subscribe(()=>this.router.navigateByUrl('/book/books'))
    }
  
    getError(field:string,error:ValidationErrors):string{
      if(error['required']) 
      {return field+'is required'}
      else if(error['minlength']){return field+'must be'}
      else return "";
    }
  }
