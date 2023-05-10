import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}

  listProducts() {
    this.router.navigate(['in', 'products', 'list']);
  }

  customerCarts() {
    this.router.navigate(['in', 'cart', 'all']);
  }
}
