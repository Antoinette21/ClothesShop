import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Basket } from '../../../models/basket';

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
      price: 1230,
      count: 1,
      productName: "Рубаха",
      productImage: "https://uxawscdn.baozun.com/aws/96001096/20230509/D43D0D68AA67502BBE968D5E63DB6EB5_1.png?x-oss-process=image/resize,m_fill,h_492,w_392"
    },
    {
      id: "2",
      productId: "2",
      orderId: "123",
      price: 1890,
      count: 1,
      productName: "Шорты",
      productImage: "https://uxawscdn.baozun.com/aws/96001096/20230509/55C4CA960336B52308038A11D388E079_1.png?x-oss-process=image/resize,m_fill,h_492,w_392"
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
    this.basketList.forEach(function (item) {
      if (item.id === productId) {
        item.count--;
      }
    }, this);
  }

  public placeOrder(): void {
    alert("Вы молодец! Оформили заказ!");
  }
}
