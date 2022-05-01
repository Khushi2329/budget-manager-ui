import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckMasterComponent } from './truck-master.component';

describe('TruckMasterComponent', () => {
  let component: TruckMasterComponent;
  let fixture: ComponentFixture<TruckMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
