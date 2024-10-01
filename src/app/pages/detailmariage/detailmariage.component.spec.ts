import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmariageComponent } from './detailmariage.component';

describe('DetailmariageComponent', () => {
  let component: DetailmariageComponent;
  let fixture: ComponentFixture<DetailmariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailmariageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailmariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
