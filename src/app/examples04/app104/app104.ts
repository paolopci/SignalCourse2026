import { Component, computed, ElementRef, signal, viewChildren } from '@angular/core';

@Component({
  selector: 'app-app104',
  imports: [],
  templateUrl: './app104.html',
  styleUrl: './app104.css',
})
export class App104 {
  categories = signal([
    { id: 1, name: 'Notebook' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Monitor' },
  ]);

  selectedCategory = signal('Nessuna');

  /*
    Recupera tutti gli elementi con #categoryButton.

    Tipo:
    Signal<readonly ElementRef<HTMLButtonElement>[]>
  */
  categoryButtons = viewChildren<ElementRef<HTMLButtonElement>>('categoryButton');

  /*
    Ogni volta che la lista cambia, Angular aggiorna il signal categoryButtons.
  */
  buttonsCount = computed(() => this.categoryButtons().length);

  addCategory(): void {
    const nextId = this.categories().length + 1;

    this.categories.update((current) => [
      ...current,
      {
        id: nextId,
        name: `Categoria ${nextId}`,
      },
    ]);
  }

  selectCategory(categoryName: string): void {
    this.selectedCategory.set(categoryName);
  }

  focusFirstCategory(): void {
    const firstButton = this.categoryButtons()[0];

    if (!firstButton) {
      return;
    }

    firstButton.nativeElement.focus();
  }

  logButtons(): void {
    this.categoryButtons().forEach((buttonRef, index) => {
      console.log(`Bottone ${index + 1}:`, buttonRef.nativeElement.textContent?.trim());
    });
  }
}
