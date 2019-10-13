import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { HTTP } from '@ionic-native/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  googleGeolocUrl = 'https://www.googleapis.com/geolocation/v1/geolocate'
  googleGeolocAddressUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
  googleGetPlacesUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
  apiKey = 'AIzaSyBMcrzDkykbrg8iIoXnkmWVxdFmBcg48V0'

  /**
  * Constructor of the Service with Dependency Injection
  * @param http The standard Angular HttpClient to make requests
  */
  constructor(private http: HttpClient) { }

  /**
  * Get GPS coordinates
  * @returns Observable with detailed GPS information
  */
  getGeolocalisation() {
    var httpOptions = {
      headers: new HttpHeaders({
        "Accept": 'application/json',
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`${this.googleGeolocUrl}?key=${this.apiKey}`, {}, httpOptions);
  }
  /**
  * Get Address from GPS coordinates
  * @returns Observable with detailed Adresse information
  */
  getAdressFromGPS(lat, lng) {
    var httpOptions = {
      headers: new HttpHeaders({
        "Accept": 'application/json',
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`https://cors-anywhere.herokuapp.com/${this.googleGeolocAddressUrl}?latlng=${lat},${lng}&key=${this.apiKey}`, {}, httpOptions);
  }

  /**
  * Get GPS coordinates from address
  * @returns Observable with detailed Adresse information
  */
  getGPSFromAddress(address) {
    var httpOptions = {
      headers: new HttpHeaders({
        "Accept": 'application/json',
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(`https://cors-anywhere.herokuapp.com/${this.googleGeolocAddressUrl}?address=${address}&key=${this.apiKey}`, httpOptions);
  }



  /**
  * Get restaurants from the google maps
  * map the result to return only the results that we need
  *
  * @param {string} location lat, long
  * @param {boolean} is_open
  * @returns Observable with the search results
  */
  getRestaurants(location: string, is_open: boolean): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        "Accept": 'application/json',
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
      })
    };
    if (is_open) {
      return this.http.get(`https://cors-anywhere.herokuapp.com/${this.googleGetPlacesUrl}?location=${location}&rankby=distance&type=restaurant&opennow&key=${this.apiKey}`, httpOptions)
    }
    else {
      return this.http.get(`https://cors-anywhere.herokuapp.com/${this.googleGetPlacesUrl}?location=${location}&rankby=distance&type=restaurant&key=${this.apiKey}`, httpOptions)
    }
  }

  getNextPageRestaurants(next_page_token: string): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        "Accept": 'application/json',
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
      })
    };
    return this.http.get(`https://cors-anywhere.herokuapp.com/${this.googleGetPlacesUrl}?pagetoken=${next_page_token}&key=${this.apiKey}`, httpOptions)
  }
}
