import { Component, signal } from '@angular/core';
import { mySignal } from './mySignal';

@Component({
  selector: 'app-app03',
  imports: [],
  templateUrl: './app03.html',
  styleUrl: './app03.css',
})
export class App03 {
  // readonly firstSignal = signal(42);
  // readonly secondSignal = signal('Ciao Paolo');

  readonly primoSignal = mySignal(55);
  readonly secondoSignal = mySignal('Ciao mondo !!!!!');

  constructor() {
    // console.log(`The first signal value is: ${this.firstSignal()}`);
    // console.log(`The second signal value is: ${this.secondSignal()}`);
    console.log(`The first signal value is: ${this.primoSignal()}`);
    console.log(`The second signal value is: ${this.secondoSignal()}`);
  }

  setSignal() {
    // return this.firstSignal.set(10);
    this.primoSignal.set(10);
  }

  updateSignal() {
    // return this.firstSignal.update((sign) => sign * 2);
    this.primoSignal.update((sign) => sign * 2);
  }
}
