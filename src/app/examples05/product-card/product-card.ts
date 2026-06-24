import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  name = input.required<string>();
  price = input.required<number>();

  selected = signal(false);

  toggleSelected(): void {
    this.selected.update((value) => !value);
  }

  resetSelection(): void {
    this.selected.set(false);
  }
}
