import { Component, DestroyRef, EffectRef, Injector, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-counter41',
  imports: [],
  templateUrl: './counter41.html',
  styleUrl: './counter41.css',
})
export class Counter41 {
  readonly value = signal(0);
  readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);
  ef: EffectRef | null = null;

  constructor() {
    const int = setInterval(() => {
      this.value.update((v) => v + 1);
      //   console.log(this.value());
    }, 1000);

    this.destroyRef.onDestroy(() => clearInterval(int));
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
