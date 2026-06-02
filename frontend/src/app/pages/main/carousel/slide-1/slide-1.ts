import { Component } from '@angular/core';
import { Clothes } from '../../../../interfaces/cards.interfaces';

@Component({
  selector: 'carousel-slide-1',
  imports: [],
  templateUrl: './slide-1.html',
  styleUrl: './slide-1.css',
})
export class Slide1 {

  clothes: Clothes[] = [
    {
      title: 'Angels Y2K Graphic Tees',
      url: 'https://cyber-techwear.com/cdn/shop/files/angels-print-mens-y2k-graphic-tees_1.jpg?v=1775152267',
      description: 'Vibrante, expresiva y llena de personalidad, la camiseta gráfica Angels Print para hombre estilo Y2K aporta una energía artística y desenfadada a la moda urbana moderna.',
      precio: 216000
    },
    {
      title: 'Cyberpunk Techwear',
      url: 'https://cyber-techwear.com/cdn/shop/products/cyberpunk-techwear-shoes.jpg?v=1759577111',
      description: 'Las zapatillas Cyberpunk Techwear son el complemento perfecto para el guardarropa de cualquier entusiasta de la moda urbana.',
      precio: 473900
    },
    {
      title: 'Deporte Cyberpunkr',
      url: 'https://cyber-techwear.com/cdn/shop/products/thick-soft-sole-men-casual-shoes-genuine_main-0_1.jpg?v=1757484395',
      description: '¿Buscas una zapatilla elegante y cómoda que llame la atención? ¡Echa un vistazo a nuestras zapatillas de deporte Cyberpunk Techwear de moda! ',
      precio: 389000
    },
    {
      title: 'Zapatos Deportivos',
      url: 'https://cyber-techwear.com/cdn/shop/products/mens-shoes-summer-breathable-trendy-ver_main-5.jpg?v=1670257688',
      description: '¿Buscas una zapatilla versátil que puedas usar tanto dentro como fuera de la cancha? No busques más que las zapatillas Tech Wear. ',
      precio: 366900
    },
  ]
}
