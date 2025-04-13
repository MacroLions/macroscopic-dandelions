import { Component } from '@angular/core';
import { HsrWorldWindowComponent } from '../pages/windows/hsr-world-window/hsr-world-window.component';
import { TestComponent } from '../pages/test/test.component';
import { CommonModule } from '@angular/common';
import { Windows98WindowComponent } from '../pages/windows/windows98-window/windows98-window.component';

@Component({
  selector: 'app-random-manager',
  standalone: true,
  imports: [CommonModule, HsrWorldWindowComponent, Windows98WindowComponent, TestComponent],
  templateUrl: './random-manager.component.html',
  styleUrl: './random-manager.component.css'
})
export class RandomManagerComponent {

  random = 1;
  ngOnInit() {
    this.random = Math.floor(Math.random() * 10);
  }

}
