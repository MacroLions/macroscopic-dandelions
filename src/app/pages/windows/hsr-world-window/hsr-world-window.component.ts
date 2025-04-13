import { Component } from '@angular/core';

@Component({
  selector: 'app-hsr-world-window',
  standalone: true,
  imports: [],
  templateUrl: './hsr-world-window.component.html',
  styleUrl: './hsr-world-window.component.css'
})
export class HsrWorldWindowComponent {
  probability = 30;
  rewards = 8;

  playClickSound(): void {
    const audio = new Audio('assets/reward.mp3'); // Usa tu ruta personalizada
    audio.play();
  }
}
