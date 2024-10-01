import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmariageComponent } from './newmariage.component';

describe('NewmariageComponent', () => {
  let component: NewmariageComponent;
  let fixture: ComponentFixture<NewmariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewmariageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewmariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
