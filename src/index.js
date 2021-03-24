import { menuload } from "./menuload";
import { indexload } from "./indexload";
import { contactLoad } from "./contactload";

navigate();

function addNavigation() {
  var about = document.querySelector('#about');
  var menu = document.querySelector('#menu');
  var contact = document.querySelector('#contact');

  about.addEventListener('click', indexload);
  menu.addEventListener('click', menuload);
  contact.addEventListener('click', contactLoad);
};

function navigate() {
  indexload();
  addNavigation();
}