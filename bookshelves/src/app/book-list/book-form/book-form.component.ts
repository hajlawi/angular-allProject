import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BooksService} from "../../services/books.service";
import {Book} from "../../../models/book.model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
bookForm:FormGroup;
fileIsUploading=false;
fileUrl:string;
fileUploaded=false;
  constructor(private router:Router,
              private bookservice:BooksService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.bookForm=this.formBuilder.group({
      title:['',Validators.required],
      author:['',Validators.required]
    });
  }
  onsaveBook(){
const title=this.bookForm.get('title').value;
const author=this.bookForm.get('author').value;
const  newbook=new Book(title,author);
if(this.fileUrl&& this.fileUrl!=''){
  newbook.photo=this.fileUrl;
}
this.bookservice.createNewBook(newbook);
this.router.navigate(['/books']);
  }
onUploadFile(file:File){
    this.fileIsUploading=true;
    this.bookservice.uploadFile(file).then((url:string)=>{
      this.fileUrl=url;
      this.fileIsUploading=false;
      this.fileUploaded=true;

    });
}
detectFile(event){
    this.onUploadFile(event.target.files[0]);
}
}
