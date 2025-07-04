import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

// initFederation('federation.manifest.json')
console.log('enviornment::', environment.production);
initFederation({
  micro1: `${environment.apiMicro1}/remoteEntry.json`,
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
