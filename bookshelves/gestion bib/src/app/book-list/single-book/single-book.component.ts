import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book.model";
import {BooksService} from "../../services/books.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
book;
  constructor(private bookservice:BooksService,
              private router:Router,
              private  activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  this.book=new Book('','');
const id=this.activeroute.snapshot.params['id'];
  this.bookservice.getSingleBooks(id).then((book:Book)=>{
    this.book=book;
  });
  }
onBack(){
  this.router.navigate(['/books']);
}
}
