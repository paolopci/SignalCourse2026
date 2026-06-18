import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-app01',
  imports: [CommonModule],
  templateUrl: './app01.html',
  styleUrl: './app01.css',
})
export class App01 {
  readonly counter$ = interval(1000);
}
