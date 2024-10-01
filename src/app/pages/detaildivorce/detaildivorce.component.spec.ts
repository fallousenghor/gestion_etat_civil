import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildivorceComponent } from './detaildivorce.component';

describe('DetaildivorceComponent', () => {
  let component: DetaildivorceComponent;
  let fixture: ComponentFixture<DetaildivorceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaildivorceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaildivorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
