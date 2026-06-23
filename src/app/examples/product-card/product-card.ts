import { Component, computed, input, numberAttribute, output } from '@angular/core';
import { Product } from '../Models/Product';
import { AddToCartEvent } from '../Models/AddToCartEvent';
import { FavoriteChangedEvent } from '../Models/FavoriteChangedEvent ';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  // Input obbligatorio: il padre DEVE passare un prodotto.
  // Nel template e nel codice si legge con product().
  product = input.required<Product>();

  // Input opzionale con valore iniziale.
  // numberAttribute converte il valore ricevuto in number.
  quantity = input(1, { transform: numberAttribute });

  // Input booleano.
  highlight = input(false);

  // Input opzionale per scegliere la valuta visualizzata.
  currency = input<'EUR' | 'USD'>('EUR');

  // Input opzionale normale.
  favorite = input(false);

  // computed() ricalcola automaticamente quando cambiano product() o quantity().
  // È preferibile rispetto a salvare manualmente valori derivati.
  priceWithVat = computed(() => this.product().price * 1.22);

  total = computed(() => this.priceWithVat() * this.quantity());

  // Evento emesso dal figlio verso il padre.
  addToCart = output<AddToCartEvent>();

  // Altro evento emesso dal figlio verso il padre.
  favoriteChanged = output<FavoriteChangedEvent>();

  onAddToCart(): void {
    if (!this.product().available) {
      return; // prodotto non disponibile
    }

    // Il figlio comunica un fatto al padre:
    // "l'utente ha aggiunto questo prodotto al carrello".
    this.addToCart.emit({
      productId: this.product().id,
      quantity: this.quantity(),
      total: this.total(),
    });
  }

  onToggleFavorite(): void {
    this.favoriteChanged.emit({
      productId: this.product().id,
      favorite: !this.favorite(),
    });
  }
}
