import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDriveFormTwoComponent } from './model-drive-form-two.component';

describe('ModelDriveFormTwoComponent', () => {
  let component: ModelDriveFormTwoComponent;
  let fixture: ComponentFixture<ModelDriveFormTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDriveFormTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDriveFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
