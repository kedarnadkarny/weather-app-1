import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public weather = {};
  public forecast = {};
  public city: string = '';
  public errors = [];
  public isError = false;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {

  }

  getWeatherByCityName() {
    if (this.city === '') {
      this.isError = true;
      this.errors.push({ 'message': 'Please enter city!' });
      return;
    } else {
      this.isError = false;
      this.errors = [];
    }
    this._weatherService.getWeatherByCityName(this.city)
      .subscribe(weather => this.weather = weather);
    this.getForecast();
  }

  getForecast() {
    this._weatherService.getForecast(this.city)
      .subscribe(forecast => this.forecast = forecast['list']);
  }

}
