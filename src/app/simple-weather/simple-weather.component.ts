import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-simple-weather',
  templateUrl: './simple-weather.component.html',
  styleUrls: ['./simple-weather.component.css']
})
export class SimpleWeatherComponent implements OnInit, OnChanges {
  @Input('childWeather') public weather: {};
  public isWeather: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.isWeather);
  }

  ngOnChanges() {
    if (Object.keys(this.weather).length > 0)
      this.isWeather = true;
    console.log(this.isWeather);

  }

}
