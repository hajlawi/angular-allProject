import { Injectable } from '@angular/core';
import {Book} from "../../models/book.model";
import {Subject} from "rxjs";
import * as firebase from "firebase";
@Injectable({
  providedIn: 'root'
})
export class BooksService {
books:Book[]=[];
  bookSubject=new Subject<Book[]>();
  constructor() { }
  emitBooks(){
    this.bookSubject.next(this.books);
  }
  saveBooks(){
    firebase.database().ref('/books').set(this.books);
  }
  getbooks(){
    firebase.database().ref('/books').on('value' ,(data)=>{
      this.books=data.val() ? data.val():[ ];
      this.emitBooks();
    });
  }

  getSingleBooks(id:number){
    return new Promise((resolve,reject)=>{
      firebase.database().ref('/books/'+id).once('value').then((book)=> {
        resolve(book.val());
      },error=>{
        reject(error);
      });
    });
  }
  createNewBook(newbook:Book){
    this.books.push(newbook);
    this.saveBooks();
    this.emitBooks();
  }
  removeBooks(book:Book){
    if(book.photo){
const storageref=firebase.storage().refFromURL(book.photo);
storageref.delete().then(()=>{
  console.log('fichier supprimé');
}).catch(error=>{
  console.log('non trouver'+error);
});
    }
    const booksIndexToRemove=this.books.findIndex((bookEl)=>{
      if(bookEl==book){
        return true;
      }
    });
    this.books.splice(booksIndexToRemove,1);
    this.saveBooks();
    this.emitBooks();
  }
  uploadFile(file:File){
    return new Promise((resolve,reject)=>{
      const almostUniqueFileName=Date.now().toString();
      const upload=firebase.storage().ref().child('images/' +almostUniqueFileName +file.name).put(file);
      upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
        ()=>{
          console.log('chargement...');
        },(error)=>{
          console.log("erreur"+error);

        },
        ()=>{
          resolve(upload.snapshot.downloadURL);
        });


    });

  }
}
