import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkixComponent } from './ankix.component';

describe('AnkixComponent', () => {
  let component: AnkixComponent;
  let fixture: ComponentFixture<AnkixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnkixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
