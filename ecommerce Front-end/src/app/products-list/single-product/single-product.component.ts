import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogsService} from "../../services/catalogs.service";
import {Product} from "../../model/product.model";
import {Subscription} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
products;
  mode: number=0;
 currentTime: number=0;
  editPhoto: boolean;

  progress: number;
  private selectedFiles:any;
  private currentFileUpload: File;
  fileUploaded=false;
  private fileIsUploading=false;
  private fileUrl: string;
 currentProduct;


  constructor(private router : Router,
              private activeRoute: ActivatedRoute,
              public catalogservice : CatalogsService) { }

  ngOnInit(): void {

    let id=this.activeRoute.snapshot.params['id'];

    this.catalogservice.getSingleRessource('http://localhost:8080/products/'+id).then((data)=>{
this.currentProduct=data;
    }
  );

}
  onEditPhoto(p) {
    this.currentProduct=p;
    this.editPhoto=true;
  }

  getTS() {
    return this.currentTime;
  }
  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }

  uploadPhoto() {
    this.fileIsUploading = true;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.catalogservice.uploadPhotoProduct(this.currentFileUpload, this.currentProduct.id).then((event:HttpResponse<any>) => {
      this.currentTime = Date.now();
      this.fileIsUploading = false;
      this.fileUploaded = true;
      console.log(event.url);
    });

  }
  onAddProductToCaddy(product: Product) {
    
  }

  onUpdateProduct(value: any) {
    
  }

  onEditProduct() {

  }
}
