import { Component } from '@angular/core';
import { Boots } from '../../../../interfaces/cards.interfaces';

@Component({
  selector: 'carousel-slide-3',
  imports: [],
  templateUrl: './slide-3.html',
  styleUrl: './slide-3.css',
})
export class Slide3 {

  boots: Boots[] = [
      {
        title: 'Botas Techwear',
        url: 'https://cyber-techwear.com/cdn/shop/products/Black_fashion-women-chunky-platform-motorcycle_variants-0_27bedfeb-82b2-402e-bb91-d6914f468815.jpg?v=1672315449',
        description: 'Salga con estilo esta temporada y parezca que ha salido de las páginas de una revista de moda con Tech Wear Boots Black. ',
        precio: 500000
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
