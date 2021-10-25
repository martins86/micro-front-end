import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  navs: any[] = [];

  constructor() {
    this.navs = [
      { ariaLabel: 'App1 in Project', url: 'app1', title: 'Micro App1', text: 'App1' },
      { ariaLabel: 'App2 in Project', url: 'app2', title: 'Micro App2', text: 'App2' }
    ];
  }
}
