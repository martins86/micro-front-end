import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TopBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopBarModule { }
