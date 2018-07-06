import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private weather = {};
  private city: string = 'Dallas';
  private country: string = '';



  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherByCityName();
  }

  getWeatherByCityName() {
    this._weatherService.getWeatherByCityName(this.city)
      .subscribe(weather => this.weather = weather);
  }

  displayWeather() {
    console.log(this.weather);
  }

}
