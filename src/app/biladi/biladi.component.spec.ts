import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiladiComponent } from './biladi.component';

describe('BiladiComponent', () => {
  let component: BiladiComponent;
  let fixture: ComponentFixture<BiladiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiladiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiladiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
