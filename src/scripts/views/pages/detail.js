import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate } from '../templates/restaurant-template';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.slice(1).toLowerCase();
    const id = url.split('/')[2];
    const restaurant = await RestaurantSource.detailRestaurant(id);
    const restaurantDetailContainer = document.querySelector('#restaurant-detail');
    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    this._renderLikeButton(restaurant);
  },

  async _renderLikeButton(restaurant) {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    if (await FavoriteRestaurantIdb.getRestaurant(restaurant.id)) {
      likeButtonContainer.innerHTML = createLikedButtonTemplate();
    } else {
      likeButtonContainer.innerHTML = createLikeButtonTemplate();
    }

    this._likeButtonListener(restaurant);
  },

  async _likeButtonListener(restaurant) {
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      if (await FavoriteRestaurantIdb.getRestaurant(restaurant.id)) {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        likeButton.innerHTML = createLikeButtonTemplate();
      } else {
        await FavoriteRestaurantIdb.putRestaurant(restaurant);
        likeButton.innerHTML = createLikedButtonTemplate();
      }
    });
  },
};

export default Detail;