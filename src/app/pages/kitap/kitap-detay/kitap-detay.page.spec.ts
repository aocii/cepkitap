import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapDetayPage } from './kitap-detay.page';

describe('KitapDetayPage', () => {
  let component: KitapDetayPage;
  let fixture: ComponentFixture<KitapDetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitapDetayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapDetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
