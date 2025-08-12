import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
})
export class NewsSectionComponent {}
