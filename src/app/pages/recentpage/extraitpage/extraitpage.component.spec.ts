import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraitpageComponent } from './extraitpage.component';

describe('ExtraitpageComponent', () => {
  let component: ExtraitpageComponent;
  let fixture: ComponentFixture<ExtraitpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraitpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraitpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
