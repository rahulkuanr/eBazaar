import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  isLoginForm = true;
  constructor(private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  signUp(data: SignUp): void {
    this.sellerService.sellerSignUp(data)
  }

  login(data:any): void {
    
  }

  showLoginForm() {
    this.isLoginForm = true;
  }

  showSignupForm() {
    this.isLoginForm = false;
  }

}
