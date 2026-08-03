import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shigeru-window',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './shigeru-window.component.html',
  styleUrl: './shigeru-window.component.css'
})

export class ShigeruWindowComponent {
  activeWindow = true;


  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.setCustomTitle('𝕊𝕙𝕚𝕘𝕖𝕣𝕦!');
  }

  setCustomTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }

  closeWindow() : void{
    const audio = new Audio('assets/stereo_madness.mp3'); // Usa tu ruta personalizada
    audio.play();
    //this.activeWindow = false;
  }

  openWindow() : void{
    this.activeWindow = true;
  }

}
