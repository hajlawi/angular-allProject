import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from "../model/category.model";
import {Subscription} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {CatalogsService} from "../services/catalogs.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,OnDestroy {
categories;
categorySubscription:Subscription;
  private crrentMessage: any;
  constructor( private router :Router,
               private categoryservice : CatalogsService,
               private activeroute : ActivatedRoute) { }

  ngOnInit(): void {

    this.categorySubscription = this.categoryservice.catalogSubject.subscribe((data) => {
      this.categories = data;
    console.log(this.categories);

    });
    this.categoryservice.getRessource('http://localhost:8080/categories');
}

  ondeleteCategory(t: Category) {

  }

  onNewCategory() {

  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe();
  }

}
