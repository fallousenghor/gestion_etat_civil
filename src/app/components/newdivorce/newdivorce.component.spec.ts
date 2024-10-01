import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdivorceComponent } from './newdivorce.component';

describe('NewdivorceComponent', () => {
  let component: NewdivorceComponent;
  let fixture: ComponentFixture<NewdivorceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewdivorceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewdivorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
