/* eslint-disable linebreak-style */
import Home from '../views/pages/home.js';
import Detail from '../views/pages/detail.js';
import Favorite from '../views/pages/favorite.js';
import LikeButtonInitiator from '../utils/like-button-initiator.js';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/like': LikeButtonInitiator
};

export default routes;