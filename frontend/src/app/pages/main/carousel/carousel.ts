import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Component } from '@angular/core';
import { Slide1 } from './slide-1/slide-1';
import { Slide2 } from './slide-2/slide-2';
import { Slide3 } from './slide-3/slide-3';

@Component({
  selector: 'main-carousel',
  imports: [Slide1, Slide2, Slide3],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {}
