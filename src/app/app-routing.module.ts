import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import {
  CreateAccountFormComponent,
} from './create-account-form/create-account-form.component';
import { LandingComponent } from './landing/landing.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'signup',
    component: CreateAccountFormComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
  },
  {
    path: '',
    component: LandingComponent,
  },

  {
    path: 'stage',
    component: ProductpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
