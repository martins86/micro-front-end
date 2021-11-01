import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'hello-world',
    loadChildren: () => loadRemoteModule({
      remoteEntry: `${environment.mfeUrlDomainOne}remoteEntry.js`,
      remoteName: 'mfe1',
      exposedModule: './HelloWorldModule'
    })
      .then(m => { return m.HelloWorldModule })
      .catch(err => console.log('Error: Load Children ', err))
  },
  {
    path: 'not-found',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
