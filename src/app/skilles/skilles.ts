import { Component } from '@angular/core';

@Component({
  selector: 'app-skilles',
  imports: [],
  templateUrl: './skilles.html',
  styleUrl: './skilles.scss',
})
export class Skilles {
  textArray: { title: string; precentage: string }[] = [
    { title: 'Html', precentage: '90%' },
    { title: 'Css', precentage: '85%' },
    { title: 'JavaScript ', precentage: '75%' },
    { title: 'TypeScript ', precentage: '70%' },
    { title: 'Angular ', precentage: '80%' },
    { title: 'Bootstrap ', precentage: '85%' },
    { title: 'SASS / SCSS ', precentage: '70%' },
    { title: 'Git & GitHub', precentage: '80%' },
  ];
}
