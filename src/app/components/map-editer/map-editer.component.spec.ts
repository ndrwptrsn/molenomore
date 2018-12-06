import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEditerComponent } from './map-editer.component';

describe('MapEditerComponent', () => {
  let component: MapEditerComponent;
  let fixture: ComponentFixture<MapEditerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapEditerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
