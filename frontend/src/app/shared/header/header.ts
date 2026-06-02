import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Logo } from './logo/logo';
import { TopMenu } from './top-menu/top-menu';

@Component({
  selector: 'app-header',
  imports: [Navbar, Logo,TopMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
