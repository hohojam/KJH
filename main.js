const navbarbt = document.querySelector('.navbarbt');
const menu = document.querySelector('.navbarmenu');
const icons = document.querySelector('.navbaricon');

navbarbt.addEventListener('click', () => {
  menu.classlist.toggle('active');
  icons.classlist.toggle('active');
});
