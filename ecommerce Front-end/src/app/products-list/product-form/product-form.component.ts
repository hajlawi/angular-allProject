import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CatalogsService} from "../../services/catalogs.service";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
product;
productForm: FormGroup
   currentFileUpload: File;
  fileIsUploading: boolean;
  currentTime: number;
  fileUrl: string;
  fileUploaded: boolean;
 currentProduct: any;
   selectedFiles: any;
  editPhoto: any;
  constructor(private router:Router,
              private catalogservice: CatalogsService,
              private  formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
this.productForm=this.formbuilder.group({
  name:['',Validators.required],
  description:['',Validators.required],
  currentPrice:['',Validators.required],
  promotion:['',Validators.required],
  selected:['',Validators.required],
  avalable:['',Validators.required],
  photoName:['',Validators.required],
  quantity:['',Validators.required],
});
  }
  onEditPhoto(p) {
    this.currentProduct=p;
    this.editPhoto=true;
  }
onSaveProduct(newProduct){
  this.productForm=newProduct;
  newProduct.photoName=this.fileUrl
    this.catalogservice.addNewproduct(newProduct);
      this.router.navigate(['/products']);
}
  onSelectedFile(event) {
    this.uploadPhoto(event.target.files[0]);
  }
  uploadPhoto(file:File) {
      this.fileIsUploading = true;
      this.catalogservice.uploadPhoto(file).then((event: HttpResponse<any>) => {
        this.currentTime = Date.now();
        this.fileUrl = file.name;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      });
    }
  getTS() {
    return this.currentTime;
  }

}
