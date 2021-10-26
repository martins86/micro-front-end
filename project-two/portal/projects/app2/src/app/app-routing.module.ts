import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component'
import { HelloApp2Component } from './hello-app2/hello-app2.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: 'app2', component: HelloApp2Component },
    ]
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
