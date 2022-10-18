import { Component, OnInit } from '@angular/core';
import {CatalogsService} from "../services/catalogs.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Product} from "../model/product.model";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {CaddyService} from "../services/caddy.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Caddy} from "../model/caddy.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
productsubscription : Subscription;
product;
  private currentTime: number=0;
  editPhoto: boolean;
  progress: number;
  private selectedFiles;
  private currentFileUpload: File;
  fileUploaded=false;
  private fileIsUploading=false;
  private fileUrl;
  private categorySubscription: Subscription;
  private categories;
  currentProduct: Product;
  productForm: FormGroup;
  quantity: number;
  caddy:Caddy
  constructor(private catalogsservice : CatalogsService,
              private router:Router,
              private activeroute : ActivatedRoute,
              private caddyService:CaddyService,
              private  formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getRoute();
    this.productsubscription=this.catalogsservice.productSubject.subscribe((data)=>{
      this.product=data;

  });
  }
  getRoute(){
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {

        let p = this.activeroute.snapshot.params.p;
        if (p == 'promo') {

          this.catalogsservice.getProducts('http://localhost:8080/products/search/promoProducts');

        } else if (p == 'dispo') {

          this.catalogsservice.getProducts('http://localhost:8080/products/search/dispoProducts');

        }
        else
          this.categorySubscription = this.catalogsservice.catalogSubject.subscribe((data) => {
            this.categories = data;
          });
        if(this.categories){
          for(let c of this.categories._embedded.categories){
          this.catalogsservice.getProducts('http://localhost:8080/categories/'+c.id+'/products');
          }}
        this.catalogsservice.getProducts("http://localhost:8080/products");
      }
    });
    this.catalogsservice.getProducts("http://localhost:8080/products");
  }
  onViewproduct(p) {
    this.router.navigate(['/products','view',p.id]);
  }

  getTS() {
    return this.currentTime;
  }

  onEditPhoto(p) {
    this.currentProduct=p;
    this.editPhoto=true;
  }

  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }
  uploadPhoto() {
      this.fileIsUploading = true;
      this.currentFileUpload = this.selectedFiles.item(0);
      this.catalogsservice.uploadPhotoProduct(this.currentFileUpload, this.currentProduct.id).then((event:HttpResponse<any>) => {
        this.currentTime = Date.now();
        this.fileIsUploading = false;
        this.fileUploaded = true;
        console.log(event.url);
      });
  }
  onAddProductToCaddy(p:Product) {
    this.caddyService.addProduct(p);
  }
  onNewProduct() {
    this.router.navigate(['product/','new']);
  }
}
