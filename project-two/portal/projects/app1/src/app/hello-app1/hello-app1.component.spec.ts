import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloApp1Component } from './hello-app1.component';

describe('HelloApp1Component', () => {
  let component: HelloApp1Component;
  let fixture: ComponentFixture<HelloApp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloApp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
