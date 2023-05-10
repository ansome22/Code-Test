import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent {
  constructor(private router: Router, private authService: AuthService) {}

  checkout() {
    this.router.navigate(['in', 'cart', 'show']);
  }

  listProducts() {
    this.router.navigate(['in', 'products', 'list']);
  }
}
