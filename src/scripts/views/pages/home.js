import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/restaurant-template';

const Home = {
  async render() {
    return `
      <h2>Explore Restaurants</h2>
      <div id="restaurant-list" class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantListContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;