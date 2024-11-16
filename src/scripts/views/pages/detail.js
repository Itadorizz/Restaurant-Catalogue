import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
} from '../templates/restaurant-template';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.slice(1).toLowerCase();
    const id = url.split('/')[2];
    const restaurant = await RestaurantSource.detailRestaurant(id);
    const restaurantDetailContainer =
      document.querySelector('#restaurant-detail');
    restaurantDetailContainer.innerHTML =
      createRestaurantDetailTemplate(restaurant);

    this._renderLikeButton(restaurant);
  },

  async _renderLikeButton(restaurant) {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    await LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant,
    });
  },
};

export default Detail;

