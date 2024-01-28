import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneticComponent } from './phonetic.component';

describe('PhoneticComponent', () => {
  let component: PhoneticComponent;
  let fixture: ComponentFixture<PhoneticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
