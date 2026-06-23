import { Component } from '@angular/core';
import { Counter41 } from '../counter41/counter41';

@Component({
  selector: 'app-app41',
  imports: [Counter41],
  templateUrl: './app41.html',
  styleUrl: './app41.css',
})
export class App41 {
  isVisible: boolean = true;

  toogleCounter() {
    this.isVisible = !this.isVisible;
  }
}
