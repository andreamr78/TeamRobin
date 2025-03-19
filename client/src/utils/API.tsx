
import { getJson } from "serpapi";

export const TravelApi = (query: string) => {
    const travelKey = `54f44bc9e11031710e5525a2dba78f352213e895619bfe58e923fa51432979af`
    getJson({
        engine: "google",
        q: {query},
        api_key: travelKey
      }, (json) => {
        console.log(json["popular_destinations"]);
    });
}

export const WeatherApi = (query: string) => {
    const weather_key= `a42a725b6106c5b620e98e324cf76cd4`;
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${weather_key}`);
}
