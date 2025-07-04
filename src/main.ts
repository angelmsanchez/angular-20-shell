import { initFederation } from '@angular-architects/native-federation';

// initFederation('federation.manifest.json')
initFederation({
  micro1: 'http://localhost:4201/remoteEntry.json',
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
