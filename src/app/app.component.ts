import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { computed } from 'src/signals/computed';
import { effect } from 'src/signals/effect';
import { signal } from 'src/signals/signal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('angular-examples');
  description = computed(() => {
    console.log('appComponent: 1st computed run.');
    return `What do you think of ${this.title()}?`;
  });
  paragraph = computed(() => {
    console.log('appComponent: 2nd computed run.');
    return `First paragraph of ${this.description()}.`
  });

  constructor(private readonly cdr: ChangeDetectorRef) {
    effect(() => {
      // cdr.detectChanges();
      console.log('appComponent: effect run.');
    });
  }

  debugTemplate(): void {
    console.log('appComponent: template called.');
  }

  refresh(): void {
    this.cdr.detectChanges();
  }

  write(value: string): void {
    this.title.set(value);
  }
}
