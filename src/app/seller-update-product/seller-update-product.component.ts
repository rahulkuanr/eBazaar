import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  productUpdatedMessage: undefined | string;
  productData: undefined | Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.productService.getProduct(productId).subscribe((data) => {
        this.productData = data;
      });
  }

  updateProduct(data: Product) {
    if(this.productData) {
      data.id = this.productData.id;
    }
    this.productService.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productUpdatedMessage = 'Product Updated Successfully';
      }
      setTimeout(() => {
        this.productUpdatedMessage = undefined;
        this.router.navigate(['seller-home']);
      }, 3000);
    });
  }
}
