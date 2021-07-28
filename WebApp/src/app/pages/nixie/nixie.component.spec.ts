import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NixieComponent } from './nixie.component';

describe('NixieComponent', () => {
  let component: NixieComponent;
  let fixture: ComponentFixture<NixieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NixieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NixieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
