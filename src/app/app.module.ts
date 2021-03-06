import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './services/weather.service';
import { SimpleWeatherComponent } from './simple-weather/simple-weather.component';
import { DayItemComponent } from './day-item/day-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SimpleWeatherComponent,
    DayItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
