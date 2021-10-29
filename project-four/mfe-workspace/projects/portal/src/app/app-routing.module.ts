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
    path: 'hello-word',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'https://3001-fuchsia-donkey-osghhfwq.ws-us18.gitpod.io/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './HelloWordModule'
    })
      .then(m => { return m.HelloWordModule })
      .catch(err => console.log('Error: Load Children ', err))
  },
  // {
  //   path: 'hello-word',
  //   loadChildren: () =>
  //     import('mfe1/HelloWordModule')
  //       .then((m) => {
  //         return m.HelloWordModule;
  //       }),
  // },
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
