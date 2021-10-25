import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloApp1Component } from './hello-app1/hello-app1.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloApp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
