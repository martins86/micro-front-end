import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloApp1Component } from './hello-app1.component';


@NgModule({
  declarations: [HelloApp1Component],
  imports: [
    CommonModule
  ],
  exports: [HelloApp1Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloApp1Module { }
