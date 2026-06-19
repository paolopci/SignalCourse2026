import { Component, DestroyRef, inject } from '@angular/core';
import { startCounting } from './util';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  readonly destroyRef = inject(DestroyRef);
  constructor() {
    startCounting();
  }
}
