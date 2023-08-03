import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = "default";
  @ViewChild('dropdownContent', { static: true }) dropdownContent!: ElementRef;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if(val.url) {
        if(sessionStorage.getItem('sellerData') && val.url.includes('seller')){
          this.menuType = "seller"
        } else {
          this.menuType = "default";
        }
      }
    })
  }

  navigateToSellerLogin(): void {
    this.router.navigate(['seller-auth']);
    this.hideDropdown();
  }

  showDropdown() {
    this.dropdownContent.nativeElement.style.display = 'block';
  }

  hideDropdown() {
    this.dropdownContent.nativeElement.style.display = 'none';
  }
}
