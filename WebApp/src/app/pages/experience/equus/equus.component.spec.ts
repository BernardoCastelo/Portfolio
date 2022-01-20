import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquusComponent } from './equus.component';

describe('EquusComponent', () => {
  let component: EquusComponent;
  let fixture: ComponentFixture<EquusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
