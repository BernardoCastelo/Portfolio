import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeComponent } from './bee.component';

describe('BeeComponent', () => {
  let component: BeeComponent;
  let fixture: ComponentFixture<BeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
