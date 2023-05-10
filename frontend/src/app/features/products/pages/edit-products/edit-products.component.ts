import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/data/product.service';

@Component({
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css'],
})
export class EditProductsComponent {
  editProductError = false;
  submitError = false;
  internalError = false;
  product?: Product;
  orginalSKU?: string;
  formGroup: FormGroup = new FormGroup({
    sku: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
  });

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orginalSKU = id;
      this.getProduct(id);
      if (this.product) {
        this.formGroup.patchValue({
          sku: this.product.sku,
          name: this.product.name,
          description: this.product.description,
          price: this.product.price,
        });
      }
    }
  }

  getProduct(id: string) {
    this.productService.findProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  submitForm() {
    //reset error variable flags
    // to visually tell the user we are sending request again
    this.internalError = this.submitError = this.editProductError = false;
    if (this.formGroup.valid) {
      //check with our dummy api user exists

      if (this.orginalSKU) {
        this.productService
          .editProduct(this.orginalSKU, this.FormToProductModel())
          .subscribe({
            next: (didSuccced) => {
              if (didSuccced) {
                this.router.navigate(['in', 'products', 'list']);
              } else {
                this.editProductError = true;
                console.log('Failed to edit Product');
              }
            },
            error: (error) => {
              console.log(error);
              this.internalError = true;
            },
          });
      }
    } else {
      this.submitError = true;
    }
  }

  goBack() {
    this.router.navigate(['in', 'products', 'list']);
  }

  private FormToProductModel(): Product {
    const product: Product = {
      sku: this.formGroup.controls['sku'].value,
      name: this.formGroup.controls['name'].value,
      description: this.formGroup.controls['description'].value,
      price: this.formGroup.controls['price'].value,
    };
    return product;
  }
}
