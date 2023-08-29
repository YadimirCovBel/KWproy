/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotasNuevasComponent } from './notasNuevas.component';

describe('NotasNuevasComponent', () => {
  let component: NotasNuevasComponent;
  let fixture: ComponentFixture<NotasNuevasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasNuevasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasNuevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
