const navMenu = () => {
  if (side.className.indexOf("menuClosed") >= 0) { 
    openNavMenu();  
  } else {
    closeNavMenu(); 
  }
}
const openNavMenu = () => {
  side.classList.remove('menuClosed'); 
  side.classList.add('menuOpen');
}

const closeNavMenu = () => {
  side.classList.add('menuClosed'); 
  side.classList.remove('menuOpen');
}

/*const showMenu = () => {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('headerMenu').style.display = 'block';
  document.getElementById('perfil').style.display = 'none';
  document.getElementById('saldo').style.display = 'none';
  document.getElementById('calculo').style.display='none';
  document.getElementById('preguntas').style.display = 'none';
}*/