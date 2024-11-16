
const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
    });


    document.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });


    drawer.addEventListener('click', (event) => event.stopPropagation());
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer, menu) {
    if (!drawer.contains(event.target) && event.target !== menu) {
      drawer.classList.remove('open');
    }
  },
};

export default DrawerInitiator;