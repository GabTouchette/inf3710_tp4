import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modify } from './modify.component';

describe('Modify', () => {
  let component: Modify;
  let fixture: ComponentFixture<Modify>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modify ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
