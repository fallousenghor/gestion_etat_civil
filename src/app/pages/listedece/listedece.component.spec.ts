import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedeceComponent } from './listedece.component';

describe('ListedeceComponent', () => {
  let component: ListedeceComponent;
  let fixture: ComponentFixture<ListedeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedeceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
