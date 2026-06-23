import { TestBed } from '@angular/core/testing';
import { App41 } from './app41';

describe('App41', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App41],
    }).compileComponents();
  });

  it('toggles the counter visibility after clicking the toggle button', () => {
    const fixture = TestBed.createComponent(App41);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('counter41 works!');

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const toggleButton = buttons[buttons.length - 1];
    toggleButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).not.toContain('counter41 works!');
  });
});
