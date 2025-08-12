import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
})
export class HeroBannerComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() backgroundImage!: string; // 👈 Este es el que falta
}
