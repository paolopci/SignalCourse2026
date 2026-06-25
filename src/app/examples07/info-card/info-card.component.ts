import { Component, computed, contentChild } from '@angular/core';
import { CardTitleDirective } from '../card-title.directive';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  // Cerca un solo elemento proiettato che abbia la direttiva CardTitleDirective.
  // Il risultato è un Signal<CardTitleDirective | undefined>.
  readonly cardTitle = contentChild(CardTitleDirective);

  // computed() ricalcola automaticamente il valore quando cambia il risultato della query.
  readonly headerText = computed(() => {
    const title = this.cardTitle();
    // Se il contenuto proiettato non contiene un elemento con appCardTitle,
    // contentChild() restituisce undefined.
    return title?.text() ?? 'Scheda senza titolo';
  });
}
