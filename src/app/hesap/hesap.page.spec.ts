import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapPage } from './hesap.page';

describe('HesapPage', () => {
  let component: HesapPage;
  let fixture: ComponentFixture<HesapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
