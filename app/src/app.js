// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
// import Users from 'src/users/Users';
import Comments from 'src/comments/Comments';

export default angular.module( 'starter-app', [ 'ngMaterial', Comments.name] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24)
      .icon("add", "./assets/svg/add.svg", 24)
      .icon("edit", "./assets/svg/edit.svg", 24)
      .icon("delete", "./assets/svg/delete.svg", 24)
      .icon("close", "./assets/svg/close.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('red');
  })
  .controller('AppController', AppController)
