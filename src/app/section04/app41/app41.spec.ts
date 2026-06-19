import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { App41 } from './app41';

describe('App41', () => {
  beforeEach(async () => {
    vi.useFakeTimers();

    await TestBed.configureTestingModule({
      imports: [App41],
    }).compileComponents();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows the counter value after clicking the toggle button', async () => {
    const fixture = TestBed.createComponent(App41);
    fixture.componentInstance.value.set(7);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).not.toContain('7');

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('7');
  });
});
