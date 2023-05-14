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
    },

    {
      id: "1",
      name: "Брюки",
      brand: "Befree",
      subCategory: "Men",
      size: [48, 50, 52],
      price: 2999,
      category: "Хлопок",
      description: "Этот товар представляет собой мультицветные брюки из хлопка (98%) с добавлением эластана (2%). Они имеют размер M INT и соответствуют параметрам модели 102-79-100, рост которой составляет 185 см. Брюки с черным однотонным узором обладают молнией в качестве застежки, длиной по внутреннему шву 78 см, длиной по боковому шву 105 см и шириной по низу 18 см. В них также предусмотрено 4 кармана. Этот товар произведен в Китае и не имеет установленного гарантийного периода. Артикул: MP002XM23F6U.",
      mainImage: "https://a.lmcdn.ru/img236x341/M/P/MP002XM23F6U_19832751_1_v1_2x.jpg",
      listImage: [
        "https://a.lmcdn.ru/img600x866/M/P/MP002XM23F6U_19832751_1_v1_2x.jpg",
        "https://a.lmcdn.ru/img600x866/M/P/MP002XM23F6U_19832752_2_v1_2x.jpg"
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
