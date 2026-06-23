import { Component, computed, signal } from '@angular/core';
import { Product } from '../Models/Product';
import { AddToCartEvent } from '../Models/AddToCartEvent';
import { FavoriteChangedEvent } from '../Models/FavoriteChangedEvent ';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-app100',
  imports: [CurrencyPipe, ProductCard],
  templateUrl: './app100.html',
  styleUrl: './app100.css',
})
export class App100 {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Tastiera meccanica',
      price: 89.9,
      available: true,
    },
    {
      id: 2,
      name: 'Mouse wireless',
      price: 39.9,
      available: true,
    },
    {
      id: 3,
      name: 'Monitor 27 pollici',
      price: 249.9,
      available: false,
    },
  ]);

  selectedIndex = signal(0);
  selectedQuantity = signal(1);
  isHighlighted = signal(true);
  favoriteIds = signal<Set<number>>(new Set<number>());
  cartRows = signal<AddToCartEvent[]>([]);
  // Valore derivato: cambia quando cambia selectedIndex() o products().
  selectedProduct = computed(() => {
    return this.products()[this.selectedIndex()];
  });

  isSelectedProductFavorite = computed(() => {
    return this.favoriteIds().has(this.selectedProduct().id);
  });

  cartTotal = computed(() => {
    return this.cartRows().reduce((sum, row) => sum + row.total, 0);
  });

  increaseQuantity(): void {
    this.selectedQuantity.update((value) => value + 1);
  }

  decreaseQuantity(): void {
    this.selectedQuantity.update((value) => Math.max(1, value - 1));
  }

  toggleHighlight(): void {
    this.isHighlighted.update((value) => !value);
  }

  changeProduct(): void {
    this.selectedIndex.update((index) => {
      const nextIndex = index + 1;
      return nextIndex >= this.products().length ? 0 : nextIndex;
    });
    // Quando cambio prodotto, resetto la quantità.
    this.selectedQuantity.set(1);
  }

  handleAddToCart(event: AddToCartEvent): void {
    // Il padre riceve l'evento emesso dal figlio.
    this.cartRows.update((rows) => [...rows, event]);
  }

  handleFavoriteChanged(event: FavoriteChangedEvent): void {
    this.favoriteIds.update((currentIds) => {
      // Creo un nuovo Set per evitare mutazioni dirette dello stato esistente.
      const nextIds = new Set(currentIds);

      if (event.favorite) {
        nextIds.add(event.productId);
      } else {
        nextIds.delete(event.productId);
      }

      return nextIds;
    });
  }

  getProductName(productId: number): string {
    return (
      this.products().find((product) => product.id === productId)?.name ?? 'Prodotto sconosciuto'
    );
  }
}
