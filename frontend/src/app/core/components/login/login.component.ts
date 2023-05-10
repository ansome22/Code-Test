import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/data/user.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  incorrectLogin = false;
  submitError = false;
  internalError = false;
  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  submitForm() {
    //reset error variable flags
    // to visually tell the user we are searching again
    this.internalError = this.submitError = this.incorrectLogin = false;
    if (this.formGroup.valid) {
      //check with our dummy api user exists
      this.userService
        .checkLogin(
          this.formGroup.controls['username'].value,
          this.formGroup.controls['password'].value
        )
        .subscribe({
          next: (user) => {
            if (user) {
              this.localStorage.setItem('user', user);
              this.router.navigate(['in', 'dashboard']);
            } else {
              this.incorrectLogin = true;
              console.log('User Not Found');
            }
          },
          error: (error) => {
            console.log(error);
            this.internalError = true;
          },
        });
    } else {
      this.submitError = true;
    }
  }
}
