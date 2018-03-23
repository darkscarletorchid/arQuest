import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraArComponent } from './camera-ar.component';

describe('CameraArComponent', () => {
  let component: CameraArComponent;
  let fixture: ComponentFixture<CameraArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
