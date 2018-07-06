import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-simple-weather',
  templateUrl: './simple-weather.component.html',
  styleUrls: ['./simple-weather.component.css']
})
export class SimpleWeatherComponent implements OnInit, OnChanges {
  @Input('childWeather') public weather: {};
  @Input('childForecast') public forecast: {};
  public isWeather: boolean = false;
  public isForecast: boolean = false;
  // public items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"]

  constructor() { }

  ngOnInit() {
    console.log(this.isWeather);
  }

  ngOnChanges() {
    if (Object.keys(this.weather).length > 0) {
      this.isWeather = true;
      // console.log(this.isWeather);
    }

    if (Object.keys(this.forecast).length > 0) {
      this.isForecast = true;
    }

  }

}
