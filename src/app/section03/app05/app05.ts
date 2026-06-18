import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-app05',
  imports: [],
  templateUrl: './app05.html',
  styleUrl: './app05.css',
})
export class App05 {
  readonly firstSignals = signal(42);
  readonly secondSignals = computed(() => this.firstSignals() * 2);

  readonly threeSignal = effect(() => {
    console.log(`FirstSignal: ${this.firstSignals()}....`);
    console.log(`SecondSignal: ${this.secondSignals()}....`);
  });

  updateFirstSignal() {
    this.firstSignals.set(Math.random() * 100);
    console.log(this.firstSignals());
  }
}
