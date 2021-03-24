var content = document.querySelector('.content');

function createHeader() {
  
  var header = document.createElement('div');
  header.classList.add('header');

  var logoContainer = document.createElement('div');
  logoContainer.className = "logo";
  logoContainer.innerHTML = "Logo";

  header.appendChild(logoContainer);

  var menuContainer = document.createElement('div');
  menuContainer.className = 'menu';

  for (let i = 0; i < 3; i++) {
    var menuElement = document.createElement('span');
    if (i == 0) {
      menuElement.setAttribute('id', "about");
      menuElement.innerHTML = 'About';
    } else if (i == 1) {
      menuElement.setAttribute('id', "menu");
      menuElement.innerHTML = 'Menu';
    } else {
      menuElement.setAttribute('id', "contact");
      menuElement.innerHTML = "Contact";
    }
    menuContainer.appendChild(menuElement);
  }

  header.appendChild(menuContainer);

  content.appendChild(header);
}

export { createHeader }