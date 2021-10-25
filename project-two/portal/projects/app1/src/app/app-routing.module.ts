import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloApp1Component } from './hello-app1/hello-app1.component';

const routes: Routes = [
  { path: '/app1', component: HelloApp1Component },
  {
    path: '**',
    redirectTo: '/app1',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
