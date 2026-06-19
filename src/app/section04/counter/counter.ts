import { Component, DestroyRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  constructor(private destroyRef: DestroyRef) {
    const sub = interval(1000).subscribe(console.log);
    destroyRef.onDestroy(() => sub.unsubscribe());
  }
}
