import { Component, computed, signal } from '@angular/core';
import { QuantitySelector } from "../quantity-selector/quantity-selector";

@Component({
  selector: 'app-app102',
  imports: [QuantitySelector],
  templateUrl: './app102.html',
  styleUrl: './app102.css',
})
export class App102 {
  /*
    Questo è lo stato del padre.
    È un WritableSignal<number>.
  */
  cartQuantity = signal(1);
  unitPrice = signal(29.9);

  /*
    computed() ricalcola automaticamente il totale
    quando cambia cartQuantity oppure unitPrice.
  */
  totalPrice = computed(() => {
    return Number((this.cartQuantity() * this.unitPrice()).toFixed(2));
  });

  resetQuantity(): void {
    this.cartQuantity.set(1);
  }
}
