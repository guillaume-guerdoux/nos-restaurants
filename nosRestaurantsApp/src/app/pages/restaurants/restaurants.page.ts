import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  test_restaurants: Array<any> = [
    {'scope': 'GOOGLE', 'rating': 4.4, 'types': ['cafe', 'food', 'point_of_interest', 'establishment'],
     'geometry': {'viewport': {'northeast': {'lng': 9.3916950302915, 'lat': 41.9260601802915}, 'southwest': {'lng': 9.388997069708495, 'lat': 41.9233622197085}},
     'location': {'lng': 9.390155799999997, 'lat': 41.9247271}}, 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
     'photos': [{'photo_reference': 'CmRaAAAADJfONLiWdFt_BSn47nVqpkowGi_47OmtcKjD1XJiMMWkC3zXjWoETJYm85faozJsTiJW2nbpP3f375xyF-Pox9UHzfYRIj0COI93PGZVjzvwpoL_k-84-1InmONg9BLaEhBFhzYMWWcV9qsFWA0P_3L6GhTh7_uKIk6MgG08xC68hJV9VyhGSg', 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/105792814785570115682/photos">Christelle B.</a>'], 'width': 4032, 'height': 2268}],
     'place_id': 'ChIJ4dy_djPt2RIRj-iunGxY5jM', 'id': '57e8b93c780ab4f550ec92f9a4e901ac893b000d',
     'opening_hours': {'open_now': true}, 'plus_code': {'global_code': '8FHFW9FR+V3', 'compound_code': 'W9FR+V3 Ventiseri, France'},
     'reference': 'ChIJ4dy_djPt2RIRj-iunGxY5jM', 'user_ratings_total': 10, 'name': 'Azzónu', 'vicinity': 'Ventiseri'},
    {'scope': 'GOOGLE', 'rating': 4.2, 'types': ['cafe', 'food', 'point_of_interest', 'establishment'],
    'geometry': {'viewport': {'northeast': {'lng': 9.391761330291502, 'lat': 41.9265166802915}, 'southwest': {'lng': 9.389063369708497, 'lat': 41.92381871970851}},
    'location': {'lng': 9.390219599999998, 'lat': 41.9251838}}, 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png',
    'photos': [{'photo_reference': 'CmRaAAAAfthh4wKlQkbgKQc5CwdUi9ywQwa3IvQlnZ9lKuBAXffNJsrk-up77yy2cLi6jSoY2n2PTfSPy9y4q3iLYlL3kVPfj2LsFzglBeMiXs7TNjayp5dXPdlrpaOe7IfK3hxaEhAibSWOHBYVuj9zR2m_MfSDGhTb7ybq5xkLq3nrrEfMjBGfaNTYLg', 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/108076795950638937366/photos">stephanie romero</a>'], 'width': 2704, 'height': 3612}],
    'place_id': 'ChIJm5A4wWrt2RIRJcaooBOPcyw', 'id': 'c463c2407d4b809f1f631be733c7bacc716c4bb4',
    'opening_hours': {'open_now': true}, 'plus_code': {'global_code': '8FHFW9GR+33', 'compound_code': 'W9GR+33 Ventiseri, France'},
    'reference': 'ChIJm5A4wWrt2RIRJcaooBOPcyw', 'user_ratings_total': 30, 'name': 'Utile Cafetaria', 'vicinity': 'Ventiseri'},
    {'scope': 'GOOGLE', 'rating': 4.3, 'types': ['cafe', 'bar', 'restaurant', 'food', 'point_of_interest', 'store', 'establishment'],
    'geometry': {'viewport': {'northeast': {'lng': 9.403423080291503, 'lat': 41.8597666302915}, 'southwest': {'lng': 9.400725119708499, 'lat': 41.8570686697085}},
    'location': {'lng': 9.4020274, 'lat': 41.8583797}}, 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png', 'price_level': 2,
    'photos': [{'photo_reference': 'CmRZAAAAVC1xhfC3yU5kK4OoaqRomB_prx1YEgP06pRT7y3i9thuD70L0StF0FEY2GbTRFrP3XkmpfWH4zvbL5ir2fUGrHOy1BwYTI3zHbCuz7LY20Ir9TT4mjJQCsyIqaxdbeJPEhCURw--8TgcEtFDb0SbEjlgGhRQtXnB7Uf71eFhDkZEU6EOH-XJrQ', 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/111905882140997334567/photos">Glacier du Port</a>'], 'width': 1880, 'height': 1595}],
    'place_id': 'ChIJq8wmjzHt2RIRgQn7V0Cy2iE', 'id': '1200a8d32ad7423c51601d4e418675481edc4dab',
    'opening_hours': {'open_now': true}, 'plus_code': {'global_code': '8FHFVC52+9R', 'compound_code': 'VC52+9R Sari-Solenzara, France'},
    'reference': 'ChIJq8wmjzHt2RIRgQn7V0Cy2iE', 'user_ratings_total': 725, 'name': 'Glacier du Port', 'vicinity': 'port de plaisance, Solenzara'},
    {'scope': 'GOOGLE', 'rating': 4.5, 'types': ['meal_takeaway', 'cafe', 'restaurant', 'food', 'point_of_interest', 'establishment'],
    'geometry': {'viewport': {'northeast': {'lng': 9.405947530291503, 'lat': 42.0002432802915}, 'southwest': {'lng': 9.403249569708498, 'lat': 41.9975453197085}},
    'location': {'lng': 9.404554, 'lat': 41.99881000000001}}, 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png', 'price_level': 1,
    'photos': [{'photo_reference': 'CmRaAAAAmK4rGQBCrqe_OdEWSoTieC2L_Wa6vZEaS2rjDHy1pfxqDIlAmq-UwGoUKyqcHLqY0-o3fumQJwARYEsYbk2GX3lLb7GMz430ZyxrzLStLGftvfHEL3D_RBwhUmabeXqsEhCP_oPOr2oyOMetGPA90_sEGhT-OJc3xnDRGXjKqlto3GI_E2Yhow', 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/107941189866948125217/photos">Johan Santoni</a>'], 'width': 4032, 'height': 3024}],
    'place_id': 'ChIJRRudyITv2RIRWCzyBL-UiYI', 'id': '2e8d68dd2777166236b28a0be41f5a3403fda588',
    'opening_hours': {'open_now': true}, 'plus_code': {'global_code': '8FHFXCX3+GR', 'compound_code': 'XCX3+GR Prunelli-di-Fiumorbo, France'},
    'reference': 'ChIJRRudyITv2RIRWCzyBL-UiYI', 'user_ratings_total': 20, 'name': 'Le Mondo', 'vicinity': 'Route de Calzarellu, Prunelli-di-Fiumorbo'}];

  constructor() { }

  ngOnInit() {
  }

}
