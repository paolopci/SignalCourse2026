import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  imports: [],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.css',
})
export class TabItemComponent {
  // Titolo del tab
  readonly title = input.required<string>();

  // Stato interno del singolo tab.
  readonly active = signal(false);

  activate(): void {
    this.active.set(true);
  }

  deactivate(): void {
    this.active.set(false);
  }
}
