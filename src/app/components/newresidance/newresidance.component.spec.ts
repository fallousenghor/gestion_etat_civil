import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewresidanceComponent } from './newresidance.component';

describe('NewresidanceComponent', () => {
  let component: NewresidanceComponent;
  let fixture: ComponentFixture<NewresidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewresidanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewresidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
