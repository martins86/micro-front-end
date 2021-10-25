import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  ngOnInit(): void {
    const scriptApp1 = document.createElement('script');
    scriptApp1.src = 'https://8080-gray-tarantula-vp6bzzhg.ws-us17.gitpod.io/app1/main.js';
    document.body.appendChild(scriptApp1);

    const scriptApp2 = document.createElement('script');
    scriptApp2.src = 'https://8080-gray-tarantula-vp6bzzhg.ws-us17.gitpod.io/app2/main.js';
    document.body.appendChild(scriptApp2);
  }
}
