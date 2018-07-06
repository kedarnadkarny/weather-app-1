import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weather: Weather;

  API_KEY = environment.api_key;

  GET_WEATHER_BY_CITY_NAME = 'http://api.openweathermap.org/data/2.5/weather?q=';

  FIVE_DAY_FORCAST = 'http://api.openweathermap.org/data/2.5/forecast?q=';


  constructor(private http: HttpClient) {

  }

  getWeatherByCityName(city: string) {
    const data = this.http.get(this.GET_WEATHER_BY_CITY_NAME + city + "&appid=" + this.API_KEY);
    return data;
  }

  getForecast(city: string) {
    const data = this.http.get(this.FIVE_DAY_FORCAST + city + "&appid=" + this.API_KEY);
    return data;
  }
}
