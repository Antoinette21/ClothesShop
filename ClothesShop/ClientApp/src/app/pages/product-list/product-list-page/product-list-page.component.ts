import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  private listProduct: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public getListProduct(): Product[] {
    return this.listProduct;
  }

  public setListProduct(products: Product[]): void {
    this.listProduct = products;
  }

}
