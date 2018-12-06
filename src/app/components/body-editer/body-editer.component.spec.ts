import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEditerComponent } from './body-editer.component';

describe('BodyEditerComponent', () => {
  let component: BodyEditerComponent;
  let fixture: ComponentFixture<BodyEditerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyEditerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
