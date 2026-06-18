import { ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly title = 'SignalsCourse';

  protected counter = 0;
  tipo: string = '';

  constructor() {
    const intervalId = setInterval(() => {
      this.counter++;
      console.log(this.counter);
      if (this.counter % 2 === 0) {
        this.tipo = 'pari';
      } else {
        this.tipo = 'dispari';
      }
      this.changeDetectorRef.detectChanges();
    }, 1000);

    this.destroyRef.onDestroy(() => clearInterval(intervalId));
  }

  calculateValue() {
    console.log('calcola il valore ....');
  }
}
