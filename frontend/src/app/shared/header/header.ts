import { Component } from '@angular/core';
import { Logo } from './logo/logo';
import { TopMenu } from './top-menu/top-menu';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [Logo, TopMenu, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
