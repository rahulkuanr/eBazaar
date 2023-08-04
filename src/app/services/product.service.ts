import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  addProduct(data: Product) {
    return this.httpClient.post('http://localhost:3000/products', data);
  }

  getProductList() {
    return this.httpClient.get<Array<Product>>('http://localhost:3000/products');
  }
}
