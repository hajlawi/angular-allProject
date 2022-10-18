import { Component, OnInit, Input } from '@angular/core';
import { catchError, Observable, startWith,map, of, tap, findIndex, mergeMap } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from '../../core/services/bookService';
import { Router } from '@angular/router';
import { BookDataState, BookStateEnum } from 'src/app/state/book.state';
import { switchMap } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
bookList$!:Observable<BookDataState<Book[]>>
readonly bookEnum=BookStateEnum
  @Input()book!:Book

  constructor(private  bookService: BookService,private router:Router) { }

  ngOnInit(): void {
 this.ongetAllBook()
  }
  ongetAllBook(){
    this.bookList$=this.bookService.getAllBooks()
    .pipe(map((books:Book[])=>({dataState:BookStateEnum.LOADED,data:books})),
          startWith({dataState:BookStateEnum.LOADING}),
          catchError(err=>of({dataState:BookStateEnum.ERROR,MessageError:err.message})))
        
  }
  onviewBook(id:number){
    this.router.navigateByUrl(`/book/view/${id}`)
  }
  onEditBook(id:number){
    this.router.navigateByUrl(`/book/edit/${id}`)
  }
  onDeleteBook(id:number){
    this.bookService.deleteBook(id).pipe(switchMap(()=>this.bookList$.pipe(map(sbook=>sbook.data?.splice(id-1,1))))).subscribe( console.log)

  }
  handleAvailableBook(){
    this.bookList$=this.bookService.getAvailableBooks()
    .pipe(map((books:Book[])=>({dataState:BookStateEnum.LOADED,data:books})),
          startWith({dataState:BookStateEnum.LOADING}),
          catchError(err=>of({dataState:BookStateEnum.ERROR,MessageError:err.message})))
  }
  handleSearchBook(KeyForm:string){
    this.bookList$=this.bookService.getSearchBooks(KeyForm)
    .pipe(map((books:Book[])=>({dataState:BookStateEnum.LOADED,data:books})),
          startWith({dataState:BookStateEnum.LOADING}),
          catchError(err=>of({dataState:BookStateEnum.ERROR,MessageError:err.message})))
  }
}
