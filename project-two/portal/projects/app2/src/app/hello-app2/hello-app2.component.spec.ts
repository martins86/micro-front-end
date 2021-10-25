import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloApp2Component } from './hello-app2.component';

describe('HelloApp2Component', () => {
  let component: HelloApp2Component;
  let fixture: ComponentFixture<HelloApp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloApp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
