import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  showNavigationArrows = true;
	showNavigationIndicators = true;
  popularProducts: undefined | Product[];

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.productService.popularProducts().subscribe(products => {
      this.popularProducts = products;
    })
  }

}
