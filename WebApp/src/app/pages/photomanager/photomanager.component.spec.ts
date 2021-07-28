import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotomanagerComponent } from './photomanager.component';

describe('PhotomanagerComponent', () => {
  let component: PhotomanagerComponent;
  let fixture: ComponentFixture<PhotomanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotomanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotomanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
