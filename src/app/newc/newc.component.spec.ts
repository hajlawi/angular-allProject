import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcComponent } from './newc.component';

describe('NewcComponent', () => {
  let component: NewcComponent;
  let fixture: ComponentFixture<NewcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
