import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Windows98WindowComponent } from './windows98-window.component';

describe('Windows98WindowComponent', () => {
  let component: Windows98WindowComponent;
  let fixture: ComponentFixture<Windows98WindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Windows98WindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Windows98WindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
