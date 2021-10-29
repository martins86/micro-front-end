import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'mfe1';

  constructor(http: HttpClient) {
    console.debug('http', http);
  }
}