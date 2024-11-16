import CONFIG from '../globals/config';

class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(`${CONFIG.BASE_URL}/list`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurants(query) {
    const response = await fetch(`${CONFIG.BASE_URL}/search?q=${query}`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestaurantSource;
