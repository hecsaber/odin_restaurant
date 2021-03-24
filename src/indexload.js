function createHeader(mainContent) {
  
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

  mainContent.appendChild(header);
}

function createLead(mainContent) {
  var lead = document.createElement('div');
  lead.classList.add('lead');

  var leadBox = document.createElement('div');
  leadBox.classList.add('lead-box');

  for (let i = 0; i < 3; i++) {
    var par = document.createElement('p');
    par.id = "line-" + (i + 1);
    if (i == 0) {
      par.innerHTML = 'the';
    } else if (i == 1) {
      par.innerHTML = 'fresh';
    } else {
      par.innerHTML = "kitchen";
    }
    leadBox.appendChild(par);
  }

  lead.appendChild(leadBox);
  mainContent.appendChild(lead);
}

function createArticle(mainContent, [id, title, alt, source]) {
  var article = document.createElement('article')
  article.id = id;

  var articleTitle = document.createElement('h1');
  articleTitle.innerHTML = title;

  var articleText = document.createElement('p');
  articleText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  var articleButton = document.createElement('button');
  articleButton.innerHTML = 'Read more';

  var articleImage = document.createElement('img');
  articleImage.alt = alt;
  articleImage.src = source;

  article.appendChild(articleTitle);
  article.appendChild(articleText);
  article.appendChild(articleButton);
  article.appendChild(articleImage);

  mainContent.appendChild(article);
}

function createFooter(mainContent) {
  var footer = document.createElement('footer');
  var footerContent = document.createElement('div');

  for (let i = 1; i <= 3; i++) {
    var footerPar = document.createElement('p');
    footerPar.setAttribute('id', 'line-' + i);
    if (i == 1) {
      footerPar.innerHTML = 'the';
    } else if (i == 2) {
      footerPar.innerHTML = 'fresh';
    } else {
      footerPar.innerHTML = "kitchen";
    }
    footerContent.appendChild(footerPar);
  }

  footer.appendChild(footerContent);

  mainContent.appendChild(footer);
}

function changeLeadbox() {
  var content = document.querySelector('.lead');
  content.classList.add('menu-content');
  var lineTwo = document.getElementById('line-2');
  lineTwo.innerHTML = 'fresh';
  var lineThree = document.getElementById('line-3');
  lineThree.innerHTML = 'kitchen';
}

function createMain(main) {
  createArticle(main, ['cooking', 'You are what you eat', 'Nice cooking photo', "./img/vegan-cooking.webp"]);
  createArticle(main, ['order', 'Order something healthy', 'Another cooking photo', "./img/healthy-food.jpg"]);
}

function indexload() {
  var content = document.querySelector('.content')
  var mainContent = document.querySelector('.main-area');

  var lead = document.querySelector('.lead');
  
  if (mainContent != null) {
    mainContent.innerHTML = '';
    changeLeadbox();
    lead.classList.remove('menu-content');
    createMain(mainContent);
  } else {
    createHeader(content);
    createLead(content);
    var mainArea = document.createElement('div');
    mainArea.classList.add('main-area');
    createMain(mainArea);
    content.appendChild(mainArea);
    createFooter(content);
  }
}

export { indexload };