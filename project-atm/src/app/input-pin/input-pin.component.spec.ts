import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPinComponent } from './input-pin.component';

describe('InputPinComponent', () => {
  let component: InputPinComponent;
  let fixture: ComponentFixture<InputPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
