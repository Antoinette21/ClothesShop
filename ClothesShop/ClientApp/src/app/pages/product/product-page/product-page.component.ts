import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  private product: Product = {
      id: "4",
      name: "Брюки",
      brand: "Modis",
      subCategory: "Men",
      size: [48, 50, 52],
      price: 2099,
      category: "Хлопок",
      description: "Это хаки шорты из 100% хлопка с молнией на застежке. Они имеют удобный размер M INT и предназначены для мульти-сезонального использования. Шорты обладают пятью карманами, а их длина по внутреннему шву составляет 73 см.",
      mainImage: "https://a.lmcdn.ru/img236x341/M/P/MP002XM1650F_19041199_1_v1_2x.jpg",
      listImage: [
        "https://a.lmcdn.ru/img600x866/M/P/MP002XM1650F_19041199_1_v1_2x.jpg",
        "https://a.lmcdn.ru/img600x866/M/P/MP002XM1650F_19041200_2_v1_2x.jpg"
      ],
      isLike: true
    };

  constructor() {
    // получение id из строки
  }

  ngOnInit(): void {
  }

  public getProduct(): Product {
    return this.product;
  }

  public setProduct(product: Product) {
    this.product = product;
  }

}
