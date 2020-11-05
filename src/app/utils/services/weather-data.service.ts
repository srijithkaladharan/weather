import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherDataService {
  apiUrl: string = "api.openweathermap.org/data/2.5/weather";
  apiKey: string = "354c352d0f34ee2be2995b45c75c1bd1";

  constructor(private http: HttpClient) {}
}
