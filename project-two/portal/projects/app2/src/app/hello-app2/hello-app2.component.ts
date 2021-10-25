import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-app2',
  templateUrl: './hello-app2.component.html',
  styleUrls: ['./hello-app2.component.scss']
})
export class HelloApp2Component implements OnInit {
  title = 'app2';
  constructor() { }

  ngOnInit(): void {
  }

}
