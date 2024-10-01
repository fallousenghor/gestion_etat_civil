import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailresidenceComponent } from './detailresidence.component';

describe('DetailresidenceComponent', () => {
  let component: DetailresidenceComponent;
  let fixture: ComponentFixture<DetailresidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailresidenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
