import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  imports: [],
  templateUrl: './quantity-selector.html',
  styleUrl: './quantity-selector.css',
})
export class QuantitySelector {
  /*
    model.required<number>() dichiara un "model input" obbligatorio.

    Il padre dovrà passare questo valore così:

      [(quantity)]="cartQuantity"

    A differenza di input(), questo signal è scrivibile.
    Quindi il figlio può fare:

      this.quantity.set(...)
      this.quantity.update(...)

    e Angular aggiornerà automaticamente anche il padre.
  */
  quantity = model.required<number>();

  /*
    Questi invece sono input signal normali.
    Il figlio li legge, ma non li modifica.
  */
  min = input(1);
  max = input(10);
  label = input('Quantità');

  increase(): void {
    this.quantity.update((currentValue) => {
      const nextValue = currentValue + 1;
      return this.clamp(nextValue);
    });
  }

  decrease(): void {
    this.quantity.update((currentValue) => {
      const nextValue = currentValue - 1;
      return this.clamp(nextValue);
    });
  }

  onManualInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const parsedValue = Number(inputElement.value);
    if (!Number.isFinite(parsedValue)) {
      return;
    }
    this.quantity.set(this.clamp(parsedValue));
  }

  private clamp(value: number): number {
    return Math.min(this.max(), Math.max(this.min(), value));
  }
}
