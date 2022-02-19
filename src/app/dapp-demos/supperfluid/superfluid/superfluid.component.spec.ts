import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperfluidComponent } from './superfluid.component';

describe('SuperfluidComponent', () => {
  let component: SuperfluidComponent;
  let fixture: ComponentFixture<SuperfluidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperfluidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperfluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
