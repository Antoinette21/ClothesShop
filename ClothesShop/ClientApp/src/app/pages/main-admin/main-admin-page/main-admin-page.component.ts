import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-main-admin-page',
  templateUrl: './main-admin-page.component.html',
  styleUrls: ['./main-admin-page.component.css']
})
export class MainAdminPageComponent implements OnInit {

  private listProduct: Product[] = [
    {
      id: "1",
      name: "Рубаха и еще что то где-то",
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
      id: "2",
      name: "Рубаха",
      size: [48, 50, 52],
      price: 1500,
      category: "Хлопок",
      description: "Самая шикарная рубаха",
      mainImage: "https://uxawscdn.baozun.com/aws/96001096/20230509/55C4CA960336B52308038A11D388E079_1.png?x-oss-process=image/resize,m_fill,h_492,w_392",
      listImage: [
        "https://uxawscdn.baozun.com/aws/96001096/20210825/9B8F088396634782A750BD352CC4A158.png?x-oss-process=image/quality,q_80/format,webp/resize,m_fill,h_649,w_464",
        "https://uxawscdn.baozun.com/aws/96001096/20210825/D94CD379EBD0B64D75C6BBC6073690C0_1.png?x-oss-process=image/quality,q_80/format,webp/resize,m_fill,h_649,w_464"
      ],
      isLike: false
    },
    {
      id: "3",
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
      isLike: false
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

  private title: string = "Добавить новый товар";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  private setAllProducts(): void {

  }

  public getTitle(): string {
    return this.title;
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

  public openAddModal(content: any): void {
    this.title = "Добавить новый товар";

    this.modalService.open(content, { centered: true });
  }

  public openModifyModal(content: any, product: Product): void {
    this.title = "Изменить товар";

    this.modalService.open(content, { centered: true });
  }
}
