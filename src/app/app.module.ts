import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { basketReducer } from './reducers/basketReducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from './product-card/product-card.component';
import { FilterComponent } from './filter/filter.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ProductPageComponent,
    ProductCardComponent,
    FilterComponent,
    LoginPageComponent,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    StoreModule.forRoot({ message: basketReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
