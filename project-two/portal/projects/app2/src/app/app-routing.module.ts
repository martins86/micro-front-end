import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloApp2Component } from './hello-app2/hello-app2.component';

const routes: Routes = [
  { path: '/app2', component: HelloApp2Component },
  {
    path: '**',
    redirectTo: '/app2',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
