import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, map } from 'rxjs';

type Options = Record<string, string>;

@Component({
  selector: 'app-app02',
  imports: [CommonModule],
  templateUrl: './app02.html',
  styleUrl: './app02.css',
})
export class App02 {
  readonly options$ = new BehaviorSubject<Options>({ r: 'Red', g: 'Green', b: 'Blue' });
  readonly selectedKey$ = new BehaviorSubject<string>('b');

  readonly a$ = new BehaviorSubject<number>(1);
  readonly b$ = new BehaviorSubject<number>(2);
  readonly somma$ = combineLatest([this.a$, this.b$]).pipe(map(([a, b]) => a + b));

  readonly selectedValue$ = combineLatest([this.options$, this.selectedKey$]).pipe(
    map(([options, selectedKey]) => options[selectedKey]),
    debounceTime(1000),
  );

  switchOptions() {
    this.options$.next({ m: 'Magenta', c: 'Cyan' });
    this.selectedKey$.next('c');
  }

  constructor() {
    this.selectedValue$.subscribe(console.log);
  }
}
