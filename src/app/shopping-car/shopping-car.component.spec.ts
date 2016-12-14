/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AhoppingCarComponent } from './shopping-car.component.ts';

describe('AhoppingCarComponent', () => {
  let component: AhoppingCarComponent;
  let fixture: ComponentFixture<AhoppingCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhoppingCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhoppingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
