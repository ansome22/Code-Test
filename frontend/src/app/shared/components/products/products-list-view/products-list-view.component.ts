import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListViewComponent {

}
