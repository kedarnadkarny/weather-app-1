import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.css']
})
export class DayItemComponent implements OnInit, OnChanges {
  @Input("items") private items = [];
  private forecast = [];
  private weekday = new Array(7);


  constructor() {
    this.weekday[0] = "Monday";
    this.weekday[1] = "Tuesday";
    this.weekday[2] = "Wednesday";
    this.weekday[3] = "Thursday";
    this.weekday[4] = "Friday";
    this.weekday[5] = "Saturday";
    this.weekday[6] = "Sunday";
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.items);

    for (var i = 0; i < this.items.length; i++) {
      var d = new Date(this.items[i]['dt_txt'].split(' ')[0]);
      console.log(this.weekday[d.getDay()]);
      this.forecast.push({
        'day': this.weekday[d.getDay()],
        'time': this.items[i]['dt_txt'].split(' ')[1],
        'max_temp': (9 / 5) * (this.items[i]['main']['temp_max'] - 273) + 32,
        'min_temp': (9 / 5) * (this.items[i]['main']['temp_min'] - 273) + 32,
        'icon': this.items[i]['weather'][0]['icon']
      });
    }
    console.log('forecast-' + this.forecast);
  }

}
