import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  CreateAccountFormComponent,
} from './create-account-form/create-account-form.component';
import { LandingComponent } from './landing/landing.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CreateAccountFormComponent,
    AddProductComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
