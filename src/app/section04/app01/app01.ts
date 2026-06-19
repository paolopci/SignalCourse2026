import { Component, DestroyRef, inject } from '@angular/core';
import { Counter } from '../counter/counter';
import { startCounting } from '../counter/util';

@Component({
  selector: 'app-app014',
  imports: [Counter],
  templateUrl: './app01.html',
  styleUrl: './app01.css',
})
export class App014 {
  showCounter: boolean = false;
  //readonly destroyRef = inject(DestroyRef);
  constructor() {}

  toogleCounter() {
    this.showCounter = !this.showCounter;
  }
}
