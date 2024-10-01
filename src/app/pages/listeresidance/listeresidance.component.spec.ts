import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeresidanceComponent } from './listeresidance.component';

describe('ListeresidanceComponent', () => {
  let component: ListeresidanceComponent;
  let fixture: ComponentFixture<ListeresidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeresidanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeresidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
