import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,map,switchMap,mergeMap, filter, tap } from "rxjs";
import { Book } from "../models/book.model";
import { environment } from '../../../environments/environment';

@Injectable({providedIn:"root"})
export class BookService{
    books:Book[]=[]
    constructor(private http:HttpClient){}
    getAllBooks():Observable<Book[]>{
        let hosting=environment.host
        return this.http.get<Book[]>(hosting+'/books')
    }
    getAvailableBooks():Observable<Book[]>{
        let hosting=environment.host
        return this.http.get<Book[]>(hosting+'/books?available="available"')
    }
    getSearchBooks(keyword:string):Observable<Book[]>{
        let hosting=environment.host
        return this.http.get<Book[]>(hosting+'/books?title_like'+keyword)
    }
    getBookById(idBook:number):Observable<Book>{
        let hosting=environment.host
        return this.http.get<Book>(`${hosting}/books/${idBook}`)
    }
    setStateBook(idBook:number,stateProduct:"available"|"unvailable"):Observable<Book>{
        let hosting=environment.host
       return  this.getBookById(idBook).pipe(map(book=>({
             ...book,
             dateLocation:stateProduct=='available'&& new Date(),
           available:stateProduct=='available'?" vailable":"unvailable"

        })),
        switchMap(updatedBook=>this.http.put<Book>(`${hosting}/books/${idBook}`,updatedBook)
    )
        )
    }
    addBook(bookForm:Book):Observable<Book>{
        let hosting=environment.host
       return this.getAllBooks().pipe(map(book=>[...book].sort((a,b)=>a.id-b.id)),
                                      map(sortedBook=>sortedBook[sortedBook.length-1]),
                                      map(previousBook=>({
                                         ...bookForm,
                                         dateLocation:new Date()
                                      })),
                                      switchMap(newBook=>this.http.post<Book>(hosting+'/books',
                                      newBook)
                                      ));

    }
    updateBook(updateBook:Book):Observable<Book>{
        let hosting=environment.host
       return  this.http.put<Book>(`${hosting}/books/${updateBook.id}`,updateBook)
    }
    deleteBook(id:number):Observable<void>{
        let hosting=environment.host
        
        return this.http.delete<void>(`${hosting}/books/${id}`)
       
       
    }
   
}