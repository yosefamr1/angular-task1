import { Component } from '@angular/core';

@Component({
  selector: 'app-whatido',
  imports: [],
  templateUrl: './whatido.html',
  styleUrl: './whatido.scss'
})
export class Whatido {
  textArray: { title: string; image: string }[] = [
  { title: "Software Development", image: "imges/Vector(1).png" },
  { title: "Web Development", image: "imges/Vector(2).png" },
  { title: "Web Design", image: "imges/Vector(3).png" }, 
  {title: "UI/UX Design", image: "imges/Vector(4).png" },
  { title: "API Integration", image: "imges/Vector(5).png" },
    { title: "Responsive Layout", image: "imges/Vector(6).png" }
  ];

}
