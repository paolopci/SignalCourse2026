import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-app106',
  imports: [],
  templateUrl: './app106.html',
  styleUrl: './app106.css',
})
export class App106 {
  saveButton = viewChild('saveButton', {
    read: ElementRef<HTMLButtonElement>,
  });
}
