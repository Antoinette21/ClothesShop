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
      productName: "Рубаха"
    },
    {
      id: "2",
      productId: "2",
      orderId: "123",
      price: 1890,
      count: 1,
      productName: "Шорты"
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
}
