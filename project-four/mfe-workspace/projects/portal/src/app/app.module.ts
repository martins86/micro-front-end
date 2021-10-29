import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainContentModule } from './layout/v1/main-content/main-content.module';
import { TopBarModule } from './layout/v1/top-bar/top-bar.module';

import { HomeModule } from './pages/home/home.module';
import { NotfoundModule } from './pages/notfound/notfound.module';

const layoutModules = [TopBarModule, MainContentModule];
const pagesModules = [HomeModule, NotfoundModule];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...layoutModules,
    ...pagesModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
