import { Component } from '@angular/core';
import { Banner } from './banner/banner';
import { Carousel } from './carousel/carousel';

@Component({
  selector: 'app-main',
  imports: [Banner, Carousel],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
