import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ITEMS_DATA, ItemData } from './items/items-data';

@Component({
  selector: 'app-windows98-window',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './windows98-window.component.html',
  styleUrl: './windows98-window.component.css'
})

export class Windows98WindowComponent {
  activeWindow = true;
  items: ItemData[] = ITEMS_DATA;

  closeWindow() : void{
    this.activeWindow = false;
  }

  openWindow() : void{
    this.activeWindow = true;
  }

}
