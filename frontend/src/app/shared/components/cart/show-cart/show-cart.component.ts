import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}
