import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-like-page',
  templateUrl: './product-like-page.component.html',
  styleUrls: ['./product-like-page.component.css']
})
export class ProductLikePageComponent implements OnInit {

  private listProduct: Product[] = [
    {
      id: "1",
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
    },
    {
      id: "4",
      name: "Рубаха",
      size: [48, 50, 52],
      price: 1500,
      category: "Хлопок",
      description: "Самая шикарная рубаха",
      mainImage: "https://uxawscdn.baozun.com/aws/96001096/20230509/978845A6D247585F68C7F6AFB471D1C0_1.png?x-oss-process=image/resize,m_fill,h_492,w_392",
      listImage: [
        "https://uxawscdn.baozun.com/aws/96001096/20210825/9B8F088396634782A750BD352CC4A158.png?x-oss-process=image/quality,q_80/format,webp/resize,m_fill,h_649,w_464",
        "https://uxawscdn.baozun.com/aws/96001096/20210825/D94CD379EBD0B64D75C6BBC6073690C0_1.png?x-oss-process=image/quality,q_80/format,webp/resize,m_fill,h_649,w_464"
      ],
      isLike: true
    }
  ];

  private likeButtonPathBefore: string = "../../../../assets/img/like-btn-before.png";
  private likeButtonPathAfter: string = "../../../../assets/img/like-btn-after.png";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  private setAllProducts(): void {

  }

  public getLikeButton(product: Product): string {
    return product.isLike
      ? this.likeButtonPathAfter
      : this.likeButtonPathBefore;
  }

  public getListProduct(): Product[] {
    return this.listProduct;
  }

  public setListProduct(products: Product[]): void {
    this.listProduct = products;
  }

  public openCard(id: string): void {
    this.router.navigate(['product', id]);
  }

  public clickLike(product: Product): void {
    this.listProduct.forEach(function (item) {
      if (item.id === product.id) {
        item.isLike = !item.isLike;
        return;
      }
    }, this);
  }

}
