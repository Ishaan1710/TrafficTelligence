import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TrafficPredictionFormComponent } from './components/traffic-prediction-form/traffic-prediction-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  date!: string;
  roadName!: string;
  areaName!: string;

  onPredict(event: { date: string, roadName: string, areaName: string }) {
    this.date = event.date;
    this.roadName = event.roadName;
    this.areaName = event.areaName;
    // Call prediction API and update map with results
  }
}