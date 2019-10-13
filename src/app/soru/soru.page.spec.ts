import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoruPage } from './soru.page';

describe('SoruPage', () => {
  let component: SoruPage;
  let fixture: ComponentFixture<SoruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoruPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
