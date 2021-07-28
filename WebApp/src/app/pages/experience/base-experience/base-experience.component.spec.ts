import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseExperienceComponent } from './base-experience.component';

describe('BaseExperienceComponent', () => {
  let component: BaseExperienceComponent;
  let fixture: ComponentFixture<BaseExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
