import { Component, OnInit } from '@angular/core';
import { GoogleService } from './../../services/google-services.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  coordinates = null;
  address = null;
  min_rate = 0;
  min_nb_reviews = 0;
  is_open = true;
  restaurants_results: Observable<any>;
  api_key = "AIzaSyBMcrzDkykbrg8iIoXnkmWVxdFmBcg48V0";
  rate = 4;

  constructor(private googleService: GoogleService) { }

  ngOnInit() {
    // Get the geolocalisaition information from the API
    this.googleService.getGeolocalisation().subscribe(result => {
      console.log(result)
      this.coordinates = result['location'];
      this.googleService.getAdressFromGPS(this.coordinates.lat, this.coordinates.lng).subscribe(result => {
        console.log(result)
        this.address = result['results'][0].formatted_address
      })
    });
  }


  launchRestaurantSearch() {
    this.googleService.getRestaurants(String(this.coordinates.lat) + ',' + String(this.coordinates.lng), this.is_open)
      .subscribe(result => {
        var temp_restaurants = result['results'];
        var final_restaurants = {}
        /*if (min_rate = 0 and min_nb_reviews = 0) {
          this.restaurants_results = temp_restaurants
        }
        else {
          for (var restaurant in temp_restaurants) {
            if ()
          }
        }*/

        this.restaurants_results = result['results'];
        console.log(this.restaurants_results)
      });
  }

  consoleChanged() {
    console.log('changed')
  }

}
