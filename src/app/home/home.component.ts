import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  details: Array<Object> = [
    {
      id: 1,
      cityName: null,
      weatherInfo: {}
    },
    {
      id: 2,
      cityName: null,
      weatherInfo: {}
    },
    {
      id: 3,
      cityName: null,
      weatherInfo: {}
    },
    {
      id: 4,
      cityName: null,
      weatherInfo: {}
    }
  ];

  ngOnInit() {}

  getWeatherInfo() {}
}
