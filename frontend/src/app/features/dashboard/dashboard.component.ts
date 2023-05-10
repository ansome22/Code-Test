import { Component } from '@angular/core';
import { UserType } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isAdmin: boolean = false;
  isCustomer: boolean = false;
  userFname!: string;

  constructor(private authService: AuthService) {
    this.isAdmin = this.isCustomer = false;
    const userType = this.authService.getUserType();
    this.userFname = this.authService.getFname();

    if (userType == UserType.Admin) {
      this.isAdmin = true;
    }

    if (userType == UserType.Customer) {
      this.isCustomer = true;
    }
  }
}
