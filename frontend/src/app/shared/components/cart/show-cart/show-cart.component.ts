import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartProductsFront } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCartComponent {
  @Input()
  cart?: CartProductsFront;

  constructor(private router: Router){}

  goBack() {
    this.router.navigate(['in', 'dashboard']);
  }
}
