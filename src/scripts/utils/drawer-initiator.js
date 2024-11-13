/* eslint-disable linebreak-style */
const DrawerInitiator = {
  init({ button, drawer }) {
    document.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
    });

    // Gunakan `document` untuk mendeteksi klik di luar drawer, termasuk `mainContent`
    document.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    // Pastikan drawer tidak tertutup saat di dalam drawer atau menu
    drawer.addEventListener('click', (event) => event.stopPropagation());
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer, button) {
    if (!drawer.contains(event.target) && event.target !== button) {
      drawer.classList.remove('open');
    }
  },
};

export default DrawerInitiator;