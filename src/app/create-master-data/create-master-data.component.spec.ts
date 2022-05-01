import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMasterDataComponent } from './create-master-data.component';

describe('CreateMasterDataComponent', () => {
  let component: CreateMasterDataComponent;
  let fixture: ComponentFixture<CreateMasterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMasterDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
