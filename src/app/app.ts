import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./hero/hero";
import { About } from './about/about';
import { Whatido } from './whatido/whatido';
import { Skilles } from './skilles/skilles';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero,About,Whatido,Skilles,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'task1';
}
