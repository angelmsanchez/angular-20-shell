import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'mfe-19',
    loadComponent: () =>
      loadRemoteModule('micro-19', './Component').then((m) => m.App),
  },
    {
    path: 'mfe-20',
    loadComponent: () =>
      loadRemoteModule('micro-20', './Component').then((m) => m.App),
  },
];