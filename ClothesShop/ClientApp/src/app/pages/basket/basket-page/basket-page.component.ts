import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Basket } from '../../../models/basket';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {

  private basketList: Basket[] = [
    {
      id: "1",
      productId: "1",
      orderId: "123",
      price: 6297,
      count: 3,
      productName: "Брюки",
      productImage: "https://a.lmcdn.ru/img236x341/M/P/MP002XM1650F_19041199_1_v1_2x.jpg"
    },
    {
      id: "2",
      productId: "2",
      orderId: "123",
      price: 1890,
      count: 1,
      productName: "Брюки из хлопка SMART",
      productImage: "https://a.lmcdn.ru/img236x341/R/T/RTLACC798801_18424216_1_v1_2x.jpg"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getAllBaskets(): Basket[] {
    return this.basketList;
  }

  public openProduct(productId: string): void {
    this.router.navigate(['product', productId]);
  }

  public addProduct(productId: string): void {
    this.basketList.forEach(function (item) {
      if (item.id === productId) {
        item.count++;
      }
    }, this);
  }

  public deleteProduct(productId: string): void {
    let deleteProductId = "";

    this.basketList.forEach(function (item) {
      if (item.id === productId) {
        item.count--;

        if (item.count === 0) {
          deleteProductId = item.id;
        }
      }
    }, this);

    if (deleteProductId !== "") {
      this.basketList = this.basketList.filter(function (el) { return el.id != deleteProductId; }); 
    }
  }

  public placeOrder(): void {
    alert("Заказ успешно оформлен! Ожидайте доставку по адресу из профиля");
  }
}
