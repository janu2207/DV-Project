import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDiseaseComponent } from './map-disease.component';

describe('MapDiseaseComponent', () => {
  let component: MapDiseaseComponent;
  let fixture: ComponentFixture<MapDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
