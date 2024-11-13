/* eslint-disable linebreak-style */
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import LikeButtonInitiator from '../utils/like-button-initiator';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/like': LikeButtonInitiator
};

export default routes;