import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  public isMenuCollapsed = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (
          sessionStorage.getItem('sellerData') &&
          val.url.includes('seller')
        ) {
          this.menuType = 'seller';
          let seller = sessionStorage.getItem('sellerData');
          let sellerData = seller && JSON.parse(seller);
          this.sellerName = sellerData[0].name;
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  navigateToSellerLogin(): void {
    this.router.navigate(['seller-auth']);
  }

  navigateToAddProduct(): void {
    this.router.navigate(['seller-add-product']);
  }

  sellerLogout() {
    sessionStorage.removeItem('sellerData');
    this.router.navigate(['/']);
  }
}
