import CONFIG from '../globals/config';

class RestaurantSource {
  static async listRestaurants() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/list`);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
      return [];
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Failed to fetch restaurant details:', error);
      return null;
    }
  }

  static async searchRestaurants(query) {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/search?q=${query}`);
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Failed to search restaurants:', error);
      return [];
    }
  }
}

export default RestaurantSource;