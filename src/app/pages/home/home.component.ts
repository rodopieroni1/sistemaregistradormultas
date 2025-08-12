import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { NewsSectionComponent } from '../../components/news-section/news-section.component';
import { QuickAccessComponent } from '../../components/quick-access/quick-access.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroBannerComponent,
    QuickAccessComponent,
    NewsSectionComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
