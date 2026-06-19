import { Component } from '@angular/core';
import { Counter } from '../counter/counter';


@Component({
  selector: 'app-app014',
  imports: [Counter],
  templateUrl: './app01.html',
  styleUrl: './app01.css',
})
export class App014 {
  showCounter: boolean = false;
  //counterValue: number = 0;

  constructor() {}

  toogleCounter() {
    this.showCounter = !this.showCounter;
  }
}
