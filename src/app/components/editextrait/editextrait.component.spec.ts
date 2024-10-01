import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditextraitComponent } from './editextrait.component';

describe('EditextraitComponent', () => {
  let component: EditextraitComponent;
  let fixture: ComponentFixture<EditextraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditextraitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditextraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
