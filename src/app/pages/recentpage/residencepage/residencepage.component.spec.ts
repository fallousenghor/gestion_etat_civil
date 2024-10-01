import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencepageComponent } from './residencepage.component';

describe('ResidencepageComponent', () => {
  let component: ResidencepageComponent;
  let fixture: ComponentFixture<ResidencepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidencepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidencepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
