import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  productAddedMessage: string | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addNewProduct(data: Product) {
    this.productService.addProduct(data).subscribe(result => {
      console.log(result);
      if(result) {
        this.productAddedMessage = "Product Added Successfully";
      }
      setTimeout(() => {this.productAddedMessage = undefined}, 3000);
    });
  }
}
