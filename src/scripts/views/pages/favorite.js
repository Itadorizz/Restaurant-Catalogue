import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/restaurant-template';

const Favorite = {
  async render() {
    return `
      <h2>Your Favorite Restaurants</h2>
      <div id="favorite-restaurant-list" class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteRestaurantListContainer = document.querySelector('#favorite-restaurant-list');

    if (restaurants.length === 0) {
      favoriteRestaurantListContainer.innerHTML = '<p>No favorite restaurants found.</p>';
      return;
    }

    restaurants.forEach((restaurant) => {
      favoriteRestaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;