import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable,map,tap } from 'rxjs';
import { BookService } from '../../core/services/bookService';
import { Book } from 'src/app/core/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
bookForm!:FormGroup
bookPreview$!:Observable<Book>
  constructor(private bookservice:BookService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.intiForm()
  }
  get f(): { [key: string]: AbstractControl } {
    return this.bookForm.controls;
  }
  intiForm(){
    this.bookForm=this.formBuilder.group({
      title:[null,[Validators.required,Validators.minLength(6)]],
      author:[null,[Validators.required]],
      available:[null,[Validators.required]],
      selected:[null,[Validators.required]],
    });
    this.bookPreview$=this.bookForm.valueChanges.pipe(
      map((formvalue)=>({
        ...formvalue,
        dateLocation:new Date()
      }))
    );
  }
  onSubmitForm(){
    this.bookservice.addBook(this.bookForm.value).pipe(tap(()=>this.router.navigateByUrl('/book/books'))).subscribe()
  }

  getError(field:string,error:ValidationErrors):string{
    if(error['required']) 
    {return field+'is required'}
    else if(error['minlength']){return field+'must be'}
    else return "";
  }
}
