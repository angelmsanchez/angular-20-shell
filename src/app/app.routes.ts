import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule('micro1', './Component').then((m) => m.App),
  },
];