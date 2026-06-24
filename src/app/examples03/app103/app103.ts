import { Component, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-app103',
  imports: [],
  templateUrl: './app103.html',
  styleUrl: './app103.css',
})
export class App103 {
  showInput = signal(false);

  /*
    Questo elemento può non esistere.
    Quindi il Signal può contenere undefined.
  */
  conditionalInput = viewChild<ElementRef<HTMLInputElement>>('conditionalInput');

  toggleInput(): void {
    this.showInput.update((value) => !value);
  }

  focusConditionalInput(): void {
    const input = this.conditionalInput();

    if (!input) {
      alert('Input non presente nel DOM.');
      return;
    }

    input.nativeElement.focus();
  }
}
