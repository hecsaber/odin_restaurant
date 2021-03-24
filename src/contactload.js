function removeMainContent() {
  var mainContent = document.querySelector('.main-area');
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
}

function addLocation() {
  var mainArea = document.querySelector('.main-area');
  var outerMap = document.createElement('div');
  outerMap.classList.add('mapouter');

  var contactTitle = document.createElement('h2');
  var contactBody = document.createElement('div');

  contactTitle.innerHTML = 'Get in touch with us';
  contactBody.innerHTML = 'Somehow...'

  var mapCanvas = document.createElement('div');
  mapCanvas.classList.add('gmap_canvas');

  var iFrame = document.createElement('iframe');
  iFrame.setAttribute('allowfullscreen', '');
  iFrame.setAttribute('loading', 'lazy');
  iFrame.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1412630.7101793638!2d67.30270577296885!3d48.357809285609875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shu!4v1616598372566!5m2!1sen!2shu');
  iFrame.setAttribute('width', mainArea.clientWidth - 20);
  iFrame.setAttribute('height', '300');
  iFrame.setAttribute('style', 'border:0;');

  window.addEventListener('resize', (e) => {
    e.preventDefault();
    var myWidth = mainArea.clientWidth;
    iFrame.setAttribute('width', myWidth);
  });

  mapCanvas.appendChild(iFrame);
  outerMap.appendChild(contactTitle);
  outerMap.appendChild(contactBody);
  outerMap.appendChild(mapCanvas);
  mainArea.appendChild(outerMap);
}

function contactLoad() {
  var content = document.querySelector('.lead');
  content.classList.add('menu-content');
  var lineTwo = document.getElementById('line-2');
  lineTwo.innerHTML = 'where';
  var lineThree = document.getElementById('line-3');
  lineThree.innerHTML = 'about';
  removeMainContent();
  addLocation();
}

export { contactLoad }