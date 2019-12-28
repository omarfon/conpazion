import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchollComponent } from './scholl.component';

describe('SchollComponent', () => {
  let component: SchollComponent;
  let fixture: ComponentFixture<SchollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
