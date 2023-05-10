import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent {
  constructor(private router: Router) {
  }

  checkout() {
    this.router.navigate(['in', 'products', 'list']);
  }

  listProducts() {
    this.router.navigate(['in', 'products', 'list']);
  }
}
