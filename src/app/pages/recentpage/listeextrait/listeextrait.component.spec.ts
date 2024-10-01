import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeextraitComponent } from './listeextrait.component';

describe('ListeextraitComponent', () => {
  let component: ListeextraitComponent;
  let fixture: ComponentFixture<ListeextraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeextraitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeextraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
