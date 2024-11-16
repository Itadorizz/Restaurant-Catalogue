import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-card">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
         alt="${restaurant.name}" 
         class="restaurant-image">
    <div class="restaurant-info">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>📍 ${restaurant.city}</p>
      <p>⭐️ ${restaurant.rating}</p>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <h2>${restaurant.name}</h2>
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
         alt="${restaurant.name}" 
         class="restaurant-detail-image">
    
    <div class="restaurant-info">
      <h3>Information</h3>
      <p>📍 ${restaurant.address}, ${restaurant.city}</p>
      <p>🍽️ Categories: ${restaurant.categories
    .map((cat) => cat.name)
    .join(', ')}</p>
      
      <h3>Description</h3>
      <p>${restaurant.description}</p>
      
      <div class="restaurant-menus">
        <div class="food-menu">
          <h3>Food Menu</h3>
          <ul>
            ${restaurant.menus.foods
    .map((food) => `<li>${food.name}</li>`)
    .join('')}
          </ul>
        </div>
        
        <div class="drink-menu">
          <h3>Drink Menu</h3>
          <ul>
            ${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join('')}
          </ul>
        </div>
      </div>
      
      <h3>Customer Reviews</h3>
      <div class="reviews">
        ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="review">
            <p><strong>${review.name}</strong> - ${review.date}</p>
            <p>${review.review}</p>
          </div>
        `
    )
    .join('')}
      </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

