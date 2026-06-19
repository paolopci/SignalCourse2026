import { Component, DestroyRef, inject } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  readonly destroyRef = inject(DestroyRef);
  constructor() {
    const sub = interval(1000).subscribe(console.log);
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
}
