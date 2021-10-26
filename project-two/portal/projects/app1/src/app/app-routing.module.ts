import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { HelloApp1Component } from './hello-app1/hello-app1.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: 'app1', component: HelloApp1Component },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
