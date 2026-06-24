import { Component, computed, signal, viewChildren } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-app105',
  imports: [ProductCard],
  templateUrl: './app105.html',
  styleUrl: './app105.css',
})
export class App105 {
  products = signal([
    { id: 1, name: 'Notebook', price: 1200 },
    { id: 2, name: 'Mouse', price: 35 },
    { id: 3, name: 'Monitor', price: 280 },
  ]);

  /*
    Cerca tutti i componenti ProductCardComponent presenti
    nella view di AppComponent.
  */
  productCards = viewChildren(ProductCard);

  productCardsCount = computed(() => this.productCards().filter((card) => card.selected()).length);

  /*
    Legge i signal interni dei componenti figli.
  */
  selectedProductsCount = computed(
    () => this.productCards().filter((card) => card.selected()).length,
  );

  resetAllSelections(): void {
    this.productCards().forEach((card) => card.resetSelection());
  }
}
