import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsrWorldWindowComponent } from './hsr-world-window.component';

describe('HsrWorldWindowComponent', () => {
  let component: HsrWorldWindowComponent;
  let fixture: ComponentFixture<HsrWorldWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HsrWorldWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HsrWorldWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
