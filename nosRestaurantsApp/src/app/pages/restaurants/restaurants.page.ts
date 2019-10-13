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
  no_filter = true;
  min_rate = 0;
  min_nb_reviews = 0;
  is_open = true;
  restaurants_results: Observable<any>;
  next_page_token: Observable<any>;
  api_key = "AIzaSyBMcrzDkykbrg8iIoXnkmWVxdFmBcg48V0";

  constructor(private googleService: GoogleService) { }

  ngOnInit() {
    // Get the geolocalisaition information from the API
    this.googleService.getGeolocalisation().subscribe(result => {
      this.coordinates = result['location'];
      this.googleService.getAdressFromGPS(this.coordinates.lat, this.coordinates.lng).subscribe(result => {
        console.log(result)
        this.address = result['results'][0].formatted_address
      })
    });
  }

  updateAddress() {
    this.googleService.getGPSFromAddress(this.address).subscribe(result => {
      console.log(result)
      this.address = result['results'][0].formatted_address
      this.coordinates = result['results'][0].geometry.location
    })
  }

  filterRestaurants(restaurants){
    var final_restaurants = [];
    if (this.no_filter) {
      final_restaurants = restaurants;
    }
    else {
      restaurants.forEach((restaurant, index)=>{
        if (restaurant.rating && restaurant.rating > this.min_rate && restaurant.user_ratings_total && restaurant.user_ratings_total > this.min_nb_reviews){
          final_restaurants.push(restaurant);
        }
      });
    }
    return final_restaurants
  }

  launchRestaurantSearch() {
    this.googleService.getRestaurants(String(this.coordinates.lat) + ',' + String(this.coordinates.lng), this.is_open)
      .subscribe(result => {
        console.log(result)
        this.next_page_token = result['next_page_token']
        this.restaurants_results = this.filterRestaurants(result['results'])
        console.log(this.restaurants_results)
      });
  }

  nextPageRestaurants(event) {
    setTimeout(() => {
      this.googleService.getNextPageRestaurants(this.next_page_token)
        .subscribe(result => {
          console.log(result)
          this.next_page_token = result['next_page_token']
          console.log(this.filterRestaurants(result['results']))
          this.restaurants_results = this.restaurants_results.concat(this.filterRestaurants(result['results']))
          console.log(this.restaurants_results)
        })
      event.target.complete();
    }, 500);
  }

  consoleChanged() {
    console.log('changed')
  }

}
