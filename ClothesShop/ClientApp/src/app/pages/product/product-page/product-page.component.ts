import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  private product: Product = {
    id: "123",
    name: "Рубаха",
    size: [48, 50, 52],
    price: 1500,
    category: "Хлопок",
    description: "Самая шикарная рубаха",
    mainImage: "https://uxawscdn.baozun.com/aws/96001096/20230509/D43D0D68AA67502BBE968D5E63DB6EB5_1.png?x-oss-process=image/resize,m_fill,h_492,w_392",
    listImage: [
      "https://uxawscdn.baozun.com/aws/96001096/20210825/9B8F088396634782A750BD352CC4A158.png?x-oss-process=image/quality,q_80/format,webp/resize,m_fill,h_649,w_464",
      "https://uxawscdn.baozun.com/aws/96001096/20210825/D94CD379EBD0B64D75C6BBC6073690C0_1.png?x-oss-process=image/quality,q_80/format,webp/resize,m_fill,h_649,w_464"
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
