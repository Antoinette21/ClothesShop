import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLikeProductList(): void {
    this.router.navigate(['product-like']);
  }

  openBasket(): void {
    this.router.navigate(['basket']);
  }

  openProductList(category: string): void {
    this.router.navigate(['product-list']);
  }

  openAuth(): void {
    this.router.navigate(['authentication']);
  }

}
