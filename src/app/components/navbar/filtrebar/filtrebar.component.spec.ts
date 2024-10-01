import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrebarComponent } from './filtrebar.component';

describe('FiltrebarComponent', () => {
  let component: FiltrebarComponent;
  let fixture: ComponentFixture<FiltrebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltrebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
