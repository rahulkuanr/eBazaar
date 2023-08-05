import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productUpdatedMessage: undefined | string;
  constructor() { }

  ngOnInit(): void {
  }

  addNewProduct(data: Product) {}

}
