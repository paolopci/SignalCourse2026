// Importa le direttive comuni di Angular, ad esempio `ngIf`, `ngFor` e pipe comuni,
// rendendole disponibili nel template del componente standalone.
import { CommonModule } from '@angular/common';

// Importa gli elementi Angular usati dal componente:
// - `Component` per dichiarare il componente;
// - `signal` per creare uno stato reattivo modificabile;
// - `linkedSignal` per creare uno stato derivato, ma comunque aggiornabile manualmente.
import { Component, linkedSignal, signal } from '@angular/core';

// Importa l'elenco completo dei prodotti disponibili, usato quando viene aggiunto
// un nuovo prodotto alla lista corrente.
import { PRODUCTS } from './PRODUCTS';

@Component({
  // Nome del selettore HTML con cui il componente puo essere usato in altri template.
  selector: 'app-app07',

  // Moduli/direttive importati direttamente dal componente standalone.
  imports: [CommonModule],

  // File HTML associato al componente.
  templateUrl: './app07.html',

  // File CSS associato al componente.
  styleUrl: './app07.css',
})
export class App07 {
  // Signal che contiene la lista dei prodotti attualmente visibili/selezionabili.
  // Il valore iniziale contiene tre prodotti.
  readonly products = signal(['Apple', 'Banana', 'Cherry']);

  // Esempio alternativo piu semplice:
  // la selezione verrebbe sempre ricollegata al primo prodotto della lista.
  // readonly selectedProduct = linkedSignal(() => this.products()[0]);

  // Signal collegato alla lista `products`.
  // Mantiene il prodotto selezionato sincronizzato con la sorgente, ma consente anche
  // aggiornamenti manuali tramite `selectedProduct.update(...)`.
  readonly selectedProduct = linkedSignal<string[], string>({
    // Signal sorgente osservato da `linkedSignal`.
    // Ogni modifica a `products` fa rieseguire la funzione `computation`.
    source: this.products,

    // FIGURA 1:
    // `prod` e il valore corrente della sorgente `products`, quindi un array di stringhe.
    // `prev` rappresenta il valore precedente calcolato da `selectedProduct`.
    // Alla prima esecuzione `prev` non esiste ancora, quindi viene gestito esplicitamente.
    computation: (prod, prev) => {
      // Prima esecuzione: non c'e un valore precedente.
      // Il prodotto selezionato iniziale diventa quindi il primo elemento della lista.
      if (!prev) return prod[0];

      // Esecuzioni successive: se il prodotto precedentemente selezionato esiste ancora
      // nella nuova lista, lo manteniamo selezionato.
      // Questo evita di perdere la selezione quando si aggiunge un prodotto.
      if (prod.includes(prev.value)) return prev.value;

      // Se il prodotto precedente non esiste piu nella lista, ad esempio dopo una rimozione,
      // la selezione viene riportata al primo prodotto disponibile.
      return prod[0];
    },
  });

  // Aggiunge un prodotto alla lista corrente.
  addProduct() {
    // `update` riceve il valore corrente del signal e restituisce il nuovo array.
    // Lo spread `...prods` mantiene i prodotti esistenti e aggiunge il prossimo prodotto
    // preso da `PRODUCTS` in base alla lunghezza attuale della lista.
    this.products.update((prods) => [...prods, PRODUCTS[prods.length]]);
  }

  // Rimuove l'ultimo prodotto dalla lista corrente.
  removeProduct() {
    // `slice(0, -1)` crea un nuovo array senza l'ultimo elemento.
    // Creare un nuovo array e importante per aggiornare correttamente il signal.
    this.products.update((prods) => prods.slice(0, -1));
  }

  // Seleziona il prodotto successivo rispetto a quello attualmente selezionato.
  nextProduct() {
    // Aggiorna manualmente `selectedProduct`.
    this.selectedProduct.update((selected) => {
      // Recupera la posizione del prodotto selezionato dentro la lista corrente.
      const index = this.products().indexOf(selected);

      // Seleziona l'elemento successivo.
      // Il modulo `%` fa ripartire la selezione dal primo elemento quando si supera
      // la fine della lista.
      return this.products()[(index + 1) % this.products().length];
    });
  }

  // Seleziona il prodotto precedente rispetto a quello attualmente selezionato.
  prevProduct() {
    // Aggiorna manualmente `selectedProduct`.
    this.selectedProduct.update((selected) => {
      // Recupera la posizione del prodotto selezionato dentro la lista corrente.
      const index = this.products().indexOf(selected);

      // Seleziona l'elemento precedente.
      // L'aggiunta di `this.products().length` evita un indice negativo quando
      // il prodotto selezionato e il primo della lista.
      return this.products()[(index - 1 + this.products().length) % this.products().length];
    });
  }
}
