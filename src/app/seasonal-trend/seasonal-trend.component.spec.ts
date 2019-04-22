import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalTrendComponent } from './seasonal-trend.component';

describe('SeasonalTrendComponent', () => {
  let component: SeasonalTrendComponent;
  let fixture: ComponentFixture<SeasonalTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonalTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonalTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
