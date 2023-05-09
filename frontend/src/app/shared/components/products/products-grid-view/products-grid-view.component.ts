import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-products-grid-view',
  templateUrl: './products-grid-view.component.html',
  styleUrls: ['./products-grid-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsGridViewComponent {

}
