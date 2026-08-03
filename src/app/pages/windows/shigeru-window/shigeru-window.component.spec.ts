import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShigeruWindowComponent } from './shigeru-window.component';

describe('ShigeruWindowComponent', () => {
  let component: ShigeruWindowComponent;
  let fixture: ComponentFixture<ShigeruWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShigeruWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShigeruWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
