import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapPage } from './kitap.page';

describe('KitapPage', () => {
  let component: KitapPage;
  let fixture: ComponentFixture<KitapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
