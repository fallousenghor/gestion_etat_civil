import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewextraitComponent } from './newextrait.component';

describe('NewextraitComponent', () => {
  let component: NewextraitComponent;
  let fixture: ComponentFixture<NewextraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewextraitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewextraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
