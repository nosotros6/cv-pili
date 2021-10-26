const boton = document.getElementById('navbarNavAltMarkup');
const tabs = document.getElementsByClassName('nav-tab');

for (let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener('click', () => boton.classList.remove('show'));
};
