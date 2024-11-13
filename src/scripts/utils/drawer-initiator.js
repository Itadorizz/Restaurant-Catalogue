/* eslint-disable linebreak-style */
const DrawerInitiator = {
  init({ hamburger, drawer }) {
    document.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
    });

    // Gunakan `document` untuk mendeteksi klik di luar drawer, termasuk `mainContent`
    document.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, hamburger);
    });

    // Pastikan drawer tidak tertutup saat di dalam drawer atau menu
    drawer.addEventListener('click', (event) => event.stopPropagation());
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer, hamburger) {
    if (!drawer.contains(event.target) && event.target !== hamburger) {
      drawer.classList.remove('open');
    }
  },
};

export default DrawerInitiator;