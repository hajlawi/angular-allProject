import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../models/book.model";
import {Subscription} from "rxjs";
import {BooksService} from "../services/books.service";
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit,OnDestroy {
books:Book[];
bookSubscription:Subscription;
  constructor(private bookservice:BooksService,private router:Router) { }
  ngOnInit(): void {
    this.bookSubscription=this.bookservice.bookSubject.subscribe((data:Book[])=>{
this.books=data;
    });
    this.bookservice.getbooks();
  }
  onNewBook(){
    this.router.navigate(['/books','new']);
  }
ondeleteBook(book:Book){
    this.bookservice.removeBooks(book);
}
onViewBook(id:number){
    this.router.navigate(['/books','view',id]);
}

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }
}
