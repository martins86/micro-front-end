import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

Promise.all([
	loadRemoteEntry(`${environment.mfeUrlDomainOne}remoteEntry.js`, 'mfe1')
])
	.catch(err => console.error('Error loading remote entries', err))
	.then(() => import('./bootstrap'))
	.catch(err => console.error(err));