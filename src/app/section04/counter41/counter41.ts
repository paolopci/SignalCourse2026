import { Component, signal, effect, inject, Injector, EffectRef } from '@angular/core';

@Component({
  selector: 'app-counter41',
  imports: [],
  templateUrl: './counter41.html',
  styleUrl: './counter41.css',
})
export class Counter41 {
  readonly value = signal(0);
  readonly injector = inject(Injector);
  ef: EffectRef | null = null;

  constructor() {
    const int = setInterval(() => {
      this.value.update((v) => v + 1);
      //   console.log(this.value());
    }, 1000);
  }

  go() {
    if (this.ef) {
      return;
    }
    this.ef = effect(
      () => {
        console.log(this.value());
      },
      {
        injector: this.injector,
      },
    );
  }

  stop() {
    this.ef?.destroy();
    this.ef = null;
  }
}
