import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedivorceComponent } from './listedivorce.component';

describe('ListedivorceComponent', () => {
  let component: ListedivorceComponent;
  let fixture: ComponentFixture<ListedivorceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedivorceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedivorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
