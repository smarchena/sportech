import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from './shared/footer/footer';
import { Main } from './pages/main/main';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Footer, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
