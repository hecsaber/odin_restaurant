function removeMainContent() {
  var mainContent = document.querySelector('.main-area');
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
}

function createMenu(mainContent) {
  document.querySelectorAll('article').forEach(e => {
    e.remove();
  })
  document.querySelectorAll('.menu-holder').forEach(e => {
    e.remove();
  })
  var menuHolder = document.createElement('div');
  menuHolder.classList.add('menu-holder');
 
  for (let index = 0; index < 7; index++) {
    var menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    var menuPhoto = document.createElement('div');
    menuPhoto.classList.add('photo');
    
    menuItem.appendChild(menuPhoto);
    createItems(menuItem);
    
    menuHolder.appendChild(menuItem);
  }
  
  mainContent.appendChild(menuHolder);
}

function createItems(menuParent) {
  removeMainContent();
  
  var menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  var title = document.createElement('h2');
  var description = document.createElement('p');

  title.innerHTML = 'Shrooomger';
  description.innerHTML = 'Veggie burger, mushroom patties, spicy sauce and love.'

  menuContent.appendChild(title);
  menuContent.appendChild(description);

  menuParent.appendChild(menuContent);
}

function menuload() {
  var content = document.querySelector('.lead');
  content.classList.add('menu-content');
  var lineTwo = document.getElementById('line-2');
  lineTwo.innerHTML = 'menu';
  var lineThree = document.getElementById('line-3');
  lineThree.innerHTML = 'list';
  var mainArea = document.querySelector('.main-area');
  createMenu(mainArea);
}

export { menuload }