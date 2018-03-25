/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BiografijaComponent } from './biografija.component';

describe('BiografijaComponent', () => {
  let component: BiografijaComponent;
  let fixture: ComponentFixture<BiografijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiografijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiografijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
