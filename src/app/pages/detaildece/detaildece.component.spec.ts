import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildeceComponent } from './detaildece.component';

describe('DetaildeceComponent', () => {
  let component: DetaildeceComponent;
  let fixture: ComponentFixture<DetaildeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaildeceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaildeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
