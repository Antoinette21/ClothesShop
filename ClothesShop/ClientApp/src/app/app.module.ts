import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductLikePageComponent } from './product-like-page/product-like-page.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { MainAdminPageComponent } from './main-admin-page/main-admin-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductPageComponent,
    ProductListPageComponent,
    BasketPageComponent,
    OrderPageComponent,
    ProductLikePageComponent,
    AuthenticationPageComponent,
    MainAdminPageComponent,
    NavigationComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'product-list', component: ProductListPageComponent },
      { path: 'product/:id', component: ProductPageComponent },
      { path: 'basket', component: BasketPageComponent },
      { path: 'order', component: OrderPageComponent },
      { path: 'product-like', component: ProductLikePageComponent },
      { path: 'authentication', component: AuthenticationPageComponent },
      { path: 'admin', component: MainAdminPageComponent },
      { path: '**', component: ErrorPageComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
