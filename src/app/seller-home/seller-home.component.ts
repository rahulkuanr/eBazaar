import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | Array<Product>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(result => {
      this.productList = result;
    })
  }

}
