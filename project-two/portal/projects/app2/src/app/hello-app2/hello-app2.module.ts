import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloApp2Component } from './hello-app2.component';

@NgModule({
  declarations: [
    HelloApp2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [HelloApp2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloApp2Module { }
