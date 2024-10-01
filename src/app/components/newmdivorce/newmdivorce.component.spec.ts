import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmdivorceComponent } from './newmdivorce.component';

describe('NewmdivorceComponent', () => {
  let component: NewmdivorceComponent;
  let fixture: ComponentFixture<NewmdivorceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewmdivorceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewmdivorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
