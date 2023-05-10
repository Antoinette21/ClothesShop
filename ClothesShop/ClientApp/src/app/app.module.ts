import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main/main-page/main-page.component';
import { ProductPageComponent } from './pages/product/product-page/product-page.component';
import { ProductListPageComponent } from './pages/product-list/product-list-page/product-list-page.component';
import { BasketPageComponent } from './pages/basket/basket-page/basket-page.component';
import { OrderPageComponent } from './pages/order/order-page/order-page.component';
import { ProductLikePageComponent } from './pages/product-like/product-like-page/product-like-page.component';
import { AuthenticationPageComponent } from './pages/authentication/authentication-page/authentication-page.component';
import { MainAdminPageComponent } from './pages/main-admin/main-admin-page/main-admin-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorPageComponent } from './pages/error/error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';

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
    ErrorPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CarouselModule,
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
