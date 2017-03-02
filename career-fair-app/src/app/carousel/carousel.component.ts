import { Component } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';
import { Images } from './carousel.images'

    
@Component({
    selector: 'homecarousel',
    templateUrl: './carousel.component.html',
    /*used to change defaults*/
    providers: [{provide: CarouselConfig, useValue: {interval: 3000, noPause: false}}]
   
})
export class CarouselComponent {
    images: Images[];

    constructor() {
    this.images = IMAGES;
  }
}

export const IMAGES: Images[] = [
    {url: "http://lorempixel.com/1500/600/abstract/"},
    {url:"http://lorempixel.com/1500/600/city/"},
    {url:"http://lorempixel.com/1500/600/food/"},
    {url:"http://lorempixel.com/1500/600/nightlife/"}
    ];