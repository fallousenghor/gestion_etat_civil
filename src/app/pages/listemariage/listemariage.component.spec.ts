import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemariageComponent } from './listemariage.component';

describe('ListemariageComponent', () => {
  let component: ListemariageComponent;
  let fixture: ComponentFixture<ListemariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListemariageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListemariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
