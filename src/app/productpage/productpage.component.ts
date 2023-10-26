import {
  Component,
  OnInit,
} from '@angular/core';

import { SkincycleService } from '../services/skincycle.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent implements OnInit {
  constructor(private skincycleService: SkincycleService) {}

  ngOnInit(): void {
    // Call the service method to get the current stage
    const currentStage = this.skincycleService.getCurrentStage();

    // Use the current stage to fetch products for that stage
    this.skincycleService.getProductsForCurrentStage(currentStage).subscribe(
      (data) => {
        console.log('Received products for the current stage:', data);
        // Handle the data as needed
      },
      (error) => {
        console.error('Error while fetching products:', error);
        // Handle the error, e.g., show an error message
      }
    );
  }
}
