import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  images: string[] = [
    '/assets/images/home-image1.jpg',
    '/assets/images/home-image2.jpg',
    '/assets/images/home-image3.jpg',
    '/assets/images/home-image4.jpg',
    '/assets/images/home-image5.jpg',
  ];

  index: number = 0;

  onImageScroll(direction: boolean) {
    if (this.index <= 0 && !direction) {
      this.index = this.images.length - 1;
    } else {
      this.index = this.index >= this.images.length - 1 && direction ? 0
      : direction ? this.index + 1 : this.index - 1;
    }  
  }
}
