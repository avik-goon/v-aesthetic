import key from '../.env/weather';

class WeatherURLMaker {
    //const WEATHER_API_URL = `https://api.weatherapi.com/v1/current.json?key=${key}&q=Kolkata`
    lat = 0.00;
    lng = 0.00;

    constructor(lat: number, lng: number){
        this.lat = lat;
        this.lng = lng;
    }

    URL(){
        return `https://api.weatherapi.com/v1/current.json?key=${key}&q=${this.lat},${this.lng}&aqi=no`;
    }
}

export default WeatherURLMaker;