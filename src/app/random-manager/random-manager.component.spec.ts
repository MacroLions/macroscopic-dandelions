import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomManagerComponent } from './random-manager.component';

describe('RandomManagerComponent', () => {
  let component: RandomManagerComponent;
  let fixture: ComponentFixture<RandomManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
