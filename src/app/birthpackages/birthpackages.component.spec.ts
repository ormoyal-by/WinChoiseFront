import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthpackagesComponent } from './birthpackages.component';

describe('BirthpackagesComponent', () => {
  let component: BirthpackagesComponent;
  let fixture: ComponentFixture<BirthpackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthpackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
