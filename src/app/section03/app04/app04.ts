import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-app04',
  imports: [],
  templateUrl: './app04.html',
  styleUrl: './app04.css',
})
export class App04 {
  readonly firstSignal = signal(42);
  readonly secondSignal = signal(12);

  valore = 10;

  readonly derived = computed(() => this.firstSignal() * 10);
  // questo non viene rilevato perchè a cambiare non è un signal
  readonly derived2 = computed(() => this.secondSignal() + this.valore);

  updateFirstSignal() {
    this.firstSignal.set(Math.random() * 100);
    console.log(this.firstSignal());
  }

  updateValore() {
    this.valore = Math.random() * 100;
    console.log(`valore: ${this.valore}`);
  }
}
