import {
  Component,
  DestroyRef,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import { startCounting } from './util';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnInit {
  private dr = inject(DestroyRef);
  private injector = inject(Injector);
  constructor() {
    //startCounting();
  }
  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      startCounting();
    });

    //startCounting();
  }
}
