import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('dropdownContent', { static: true }) dropdownContent!: ElementRef;
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
