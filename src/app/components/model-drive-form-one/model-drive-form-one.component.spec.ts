import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDriveFormOneComponent } from './model-drive-form-one.component';

describe('ModelDriveFormOneComponent', () => {
  let component: ModelDriveFormOneComponent;
  let fixture: ComponentFixture<ModelDriveFormOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDriveFormOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDriveFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
