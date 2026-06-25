import { computed, Directive, Host, HostBinding, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
})
export class HoverCardDirective {
  // Signal privato che indica se il mouse è sopra l'elemento host
  private readonly isHovered = signal(false);

  // Signal privato che conta i click sull'elemento host
  private readonly clickCount = signal(0);

  // Signal calcolato: cambia colore in base allo stato hover
  private readonly backgroundColor = computed(() => (this.isHovered() ? '#941732' : '#ffffff'));

  // Signal calcolato: cambia bordo in base allo stato hover
  private readonly borderColor = computed(() => (this.isHovered() ? '#0d6efd' : '#dee2e6'));
  private readonly Color = computed(() => (this.isHovered() ? '#f1f2f3' : '#090a0a'));

  // Class CSS sempre presente sull'host
  @HostBinding('class.app-hover-card')
  readonly baseClass = true;

  // Classe CSS applicata solo quando il mouse è sopra l'host
  @HostBinding('class.app-hover-card--hovered')
  get hoveredClass(): boolean {
    return this.isHovered();
  }

  // Binding sullo stile background-color dell'host
  @HostBinding('style.backgroundColor')
  get hostBackgroundColor(): string {
    return this.backgroundColor();
  }

  // Binding sullo stile borderColor dell'host
  @HostBinding('style.borderColor')
  get hostBorderColor(): string {
    return this.borderColor();
  }
  // Binding sullo stile borderColor dell'host
  @HostBinding('style.Color')
  get hostColor(): string {
    return this.Color();
  }

  // Binding su un attributo custom utile per debug o test
  @HostBinding('attr.data-click')
  get hostDataClick(): number {
    return this.clickCount();
  }

  // Binding su un attributo ARIA
  @HostBinding('attr.aria-label')
  get hostAriaLabel(): string {
    return `Elemento cliccato ${this.clickCount} volte`;
  }

  // Evento mouseenter sull'elemento host
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isHovered.set(true);
  }

  // Evento mouseleave sull'elemento host
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isHovered.set(false);
  }

  // Evento click sull'elemento host
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.clickCount.update((currentValue) => currentValue + 1);

    console.log('Elemento cliccato:', event.target);
    console.log('Numero click:', this.clickCount());
  }

  // Evento globale: premendo ESC resetto lo stato
  @HostListener('window:keydown.escape')
  onEscapePressed(): void {
    console.log('Reset dei contatori ....');
    this.isHovered.set(false);
    this.clickCount.set(0);
  }
}
