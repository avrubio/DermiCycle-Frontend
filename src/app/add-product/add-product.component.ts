import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product = {
    name: '',
    directions: '',
    stageId: 0,
  };

  constructor(private productService: UserService, private router: Router) {}

  addProduct(): void {
    this.productService
      .addProduct(
        this.product.name,
        this.product.directions,
        this.product.stageId
      )
      .subscribe(
        (response) => {
          console.log('Adding product successful', response);
          // Handle successful login here (e.g., set user session, redirect, etc.)
          this.router.navigate(['/stage']);
        },
        (error) => {
          console.error('Adding product failed', error);
          // Handle login errors here (e.g., display an error message)
        }
      );
  }

  ngOnInit(): void {}
}
