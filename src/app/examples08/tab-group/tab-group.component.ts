import { Component, contentChildren, effect, signal } from '@angular/core';
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css',
})
export class TabGroupComponent {
  // Cerca tutti gli app-tab-item proiettati dentro app-tab-group.
  // Il risultato è un Signal<readonly TabItemComponent[]>.
  readonly tabs = contentChildren(TabItemComponent);

  // Indice del tab selezionato.
  readonly selectedIndex = signal(0);

  constructor() {
    // effect() reagisce quando cambia:
    // - la lista dei tab proiettati
    // - l'indice selezionato
    effect(() => {
      const tabs = this.tabs();
      const selectedIndex = this.selectedIndex();

      tabs.forEach((tab, index) => {
        if (index === selectedIndex) {
          tab.activate();
        } else {
          tab.deactivate();
        }
      });
    });
  }

  selectTab(index: number): void {
    this.selectedIndex.set(index);
  }
}
