import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appCardTitle]',
  standalone: true,
})
export class CardTitleDirective {
  // Input Signal obbligatorio.
  // Permette di scrivere:
  // <h2 appCardTitle="Dettaglio cliente">Mario Rossi</h2>

  readonly text = input.required<string>({
    alias: 'appCardTitle',
  });
}
