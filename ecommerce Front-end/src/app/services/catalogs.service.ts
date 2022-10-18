import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Category} from "../model/category.model";
import {AuthService} from "./auth.service";
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import {reject} from "q";
import {error} from "selenium-webdriver";


@Injectable({
  providedIn: 'root'
})
export class CatalogsService {
  catalogs;
  products=[];
  catalogSubject = new Subject<any[]>();
  productSubject = new Subject<any[]>();
  private progress;
  private fileUrl: string;


  constructor(private authservice: AuthService, private httpClient: HttpClient, private router: Router) {
  }

  getRessource(url) {
    // if (this.authservice.jwt == null) this.authservice.loadToken();
    return this.httpClient.get<any>(url).subscribe((data) => {
      this.catalogs = data ? data : [];
      this.emitCatalog()

      // console.log(this.catalogs.name)
    }, err => {
      console.log(err)
      this.router.navigate(['/auth', 'signin']);
      this.authservice.signOutUser();
    });

  }

  emitCatalog() {
    this.productSubject.next(this.products);
    this.catalogSubject.next(this.catalogs)
  }

  getSingleRessource(url) {
    return new Promise((resolve, reject) => {
      this.httpClient.get<any>(url).subscribe((data) => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  getProducts(url) {
    // if (this.authservice.jwt == null) this.authservice.loadToken();
    return this.httpClient.get<any>(url).subscribe((data) => {
      this.products = data._embedded.products ? data._embedded.products : [];
      this.emitCatalog();

    }, err => {
      console.log(err)
      this.router.navigate(['/auth', 'signin']);
      this.authservice.signOutUser();
    });

  }

  uploadPhotoProduct(file: File, idProduct) {
    return new Promise((resolve, reject) => {
      let formdata: FormData = new FormData();
      formdata.append('file', file);
      const req = new HttpRequest('POST', 'http://localhost:8080/uploadPhoto/' + idProduct, formdata ,{
        reportProgress: true,
        responseType: 'text'
      });

      this.httpClient.request(req).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
           console.log(req);
          //this.getProducts(this.currentRequest);
          //this.refreshUpdatedProduct();
          this.fileUrl = event.url;
          //console.log(this.fileUrl)
          resolve(event);
        }
      }, error => {
        reject( alert("Problème de chargement"));
      });
    });
  }
  uploadPhoto(file: File) {
    return new Promise((resolve, reject) => {
      let formdata: FormData = new FormData();
      formdata.append('file', file);
      const req = new HttpRequest('POST', 'http://localhost:8080/saveProduct/' , formdata ,{
        reportProgress: true,
        responseType: 'text'

      });

      this.httpClient.request(req).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log(req);
          //this.getProducts(this.currentRequest);
          //this.refreshUpdatedProduct();
          this.fileUrl = event.url;
          //console.log(this.fileUrl)
          resolve(event);
        }
      }, error => {
        reject( error);
      });
    });
  }

  saveProduct(currentProduct:Product){
      this.httpClient.post('http://localhost:8080/products',currentProduct).subscribe((data)=>{
        console.log(data)

    });

  }
  addNewproduct(newProduct){
this.products.push(newProduct);
this.saveProduct(newProduct);
this.emitCatalog();
  }
}
