import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZone: 'noop'
  })
  .catch(console.error);
