import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';
import { Images } from './carousel.images'

 @Component({
	moduleId: module.id,
  selector: 'homecarousel',
  templateUrl: 'carousel.component.html',
	"styles": [
				"../node_modules/bootstrap/dist/css/bootstrap.min.css",
			"styles.css",
		],
	providers: [{provide: CarouselConfig, useValue: {interval: 5000}}]
})

export class CarouselComponent  {  
	images: Images[];

  constructor() {
    this.images = IMAGES;
  }

}

export const IMAGES: Images[] = [
	{url:"app/assets/carousel/pix1_sample.jpg"},
	{url:"http://lorempixel.com/1500/600/business/"}
	{url:"app/assets/carousel/pix3_sample.jpg"},
	];
