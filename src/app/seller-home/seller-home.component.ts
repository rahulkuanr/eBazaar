import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | Array<Product>;
  productDeletedMessage: undefined | string;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.productService.getProductList().subscribe((result) => {
      this.productList = result;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productDeletedMessage = 'Product Deleted!';
        this.getProductsList();
      }
      setTimeout(() => {
        this.productDeletedMessage = undefined;
      }, 3000);
    });
  }

  navigateToUpdateProduct(id: number) {
    this.router.navigate([`seller-update-product/${id}`]);
    
  }
}
