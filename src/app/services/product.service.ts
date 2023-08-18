import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  addProduct(data: Product) {
    return this.httpClient.post('http://localhost:3000/products', data);
  }

  getProductList() {
    return this.httpClient.get<Array<Product>>(
      'http://localhost:3000/products'
    );
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product: Product) {
    return this.httpClient.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }

  popularProducts() {
    return this.httpClient.get<Array<Product>>(
      'http://localhost:3000/products?_limit=3'
    );
  }
}
