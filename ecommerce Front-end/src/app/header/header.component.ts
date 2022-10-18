import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Category} from "../model/category.model";
import {CatalogsService} from "../services/catalogs.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
private CategoriesSubscription:Subscription;

  constructor(public catalogService:CatalogsService) { }

  ngOnInit(): void {
  }

  OnSelectedProduct() {

  }

  onDisponible() {

  }

  onPromotion() {

  }

  ngOnDestroy(): void {
  }

  onLogout() {

  }
}
