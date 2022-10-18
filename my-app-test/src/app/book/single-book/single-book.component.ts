import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../core/services/bookService';
import { Observable,tap,filter,map } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
currentBook$!:Observable<Book>
buttonText!:string
  constructor( private bookService:BookService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    const bookId=this.router.snapshot.params['id']
    this.currentBook$=this.bookService.getBookById(+bookId)
 
  }
  onVailable(book:Book){
   
 if (this.buttonText === 'available') {
  this.currentBook$= this.bookService.setStateBook(book.id,'available').pipe(
            tap(() => this.buttonText = 'unvailable')
        );
    } else {
      this.currentBook$=this.bookService.setStateBook(book.id, 'unvailable').pipe(
            tap(() => this.buttonText = 'available')
        );
    }
     
  }
  
  
}
