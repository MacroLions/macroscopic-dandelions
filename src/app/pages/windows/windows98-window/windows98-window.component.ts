import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-windows98-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './windows98-window.component.html',
  styleUrl: './windows98-window.component.css'
})
export class Windows98WindowComponent {
  items: string[] = [
    '3½ Floppy (A:)',
    'Local Disk (C:)',
    'CD Drive (D:)',
    'Control Panel',
    'Printers',
    'Dial-Up Networking',
    'Recycle Bin',
    'My Documents'
  ];
}
