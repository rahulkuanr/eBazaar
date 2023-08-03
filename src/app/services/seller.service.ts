import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient, private router: Router) {}

  sellerSignUp(data: SignUp): void {
    this.httpClient
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        sessionStorage.setItem('sellerData', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      });
  }

  reloadSeller(): void {
    if(sessionStorage.getItem('sellerData')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
