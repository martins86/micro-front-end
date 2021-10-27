import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  private urlCDN: string = 'https://8080-orange-giraffe-e98luyei.ws-us18.gitpod.io';

  ngOnInit(): void {
    const scriptApp1 = document.createElement('script');
    scriptApp1.src = `${this.urlCDN}/app1/main.js`;
    document.body.appendChild(scriptApp1);

    const scriptApp2 = document.createElement('script');
    scriptApp2.src = `${this.urlCDN}/app2/main.js`;
    document.body.appendChild(scriptApp2);
  }
}
