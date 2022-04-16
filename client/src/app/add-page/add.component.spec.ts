import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add } from './add.component';

describe('Add', () => {
  let component: Add;
  let fixture: ComponentFixture<Add>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
