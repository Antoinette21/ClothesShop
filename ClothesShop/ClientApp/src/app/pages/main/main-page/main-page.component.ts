import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  slides = [
    { image: 'https://uxawscdn.baozun.com/aws/96001096/20230424/644AB73C352DFB640DD5CCAA8D53255F.png?x-oss-process=image/quality,q_80/format,webp', text: 'First' },
    { image: 'https://uxawscdn.baozun.com/aws/96001096/20230424/A530434417284FF49B8A28BE5AFF7372.png?x-oss-process=image/quality,q_80/format,webp', text: 'Second' },
    { image: 'https://uxawscdn.baozun.com/aws/96001096/20230414/4653648F2416072869E4F25EBF60BC0E.png?x-oss-process=image/quality,q_80/format,webp', text: 'Third' }
  ];
  noWrapSlides = false;
  showIndicator = true;

  constructor() { }

  ngOnInit(): void {
  }

}
