import { createHeader } from "./header";

var content = document.querySelector('.content');

function createLead() {
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
  content.appendChild(lead);
}

function createArticle(id, title, alt, source) {
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

  content.appendChild(article);
}

function createFooter() {
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

  content.appendChild(footer);
}

function pageload() {
  while (content.lastChild.className != 'header') {
    content.removeChild(content.lastChild);
  }
  createLead();
  createArticle('cooking', 'You are what you eat', 'Nice cooking photo', "./img/vegan-cooking.webp");
  createArticle('order', 'Order something healthy', 'Another cooking photo', "./img/healthy-food.jpg");
  createFooter();
};

export {pageload};