import { Component } from '@angular/core';
import { TrafficPredictionService } from '../../services/traffic-prediction.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-prediction-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './traffic-prediction-form.component.html',
  styleUrl: './traffic-prediction-form.component.css'
})
export class TrafficPredictionFormComponent {
  date!: string;
  areaName!: string;
  roadName!: string;
  prediction: any;

  constructor(private trafficPredictionService: TrafficPredictionService) {}

  onSubmit() {
    // Call the service to get the prediction
    this.trafficPredictionService.predictCongestion(this.date, this.areaName, this.roadName)
      .subscribe(result => {
        this.prediction = result;
      }, error => {
        console.error('Error fetching prediction:', error);
      });
  }
}
