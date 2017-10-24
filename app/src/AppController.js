/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(CommentsDataService, $mdSidenav, $mdDialog) {
  var self = this;

  self.selected     = null;
  self.comments     = [ ];
  self.customFullscreen = true;
  self.selectComment = selectComment;
  self.toggleList = toggleCommentsList;
  self.openModal = openCommentModal;
  // self.users        = [ ];
  // self.selectUser   = selectUser;
  // self.toggleList   = toggleUsersList;

  // Load all registered users

  // UsersDataService
  //       .loadAllUsers()
  //       .then( function( users ) {
  //         self.users    = [].concat(users);
  //         self.selected = users[0];
  //       });

  CommentsDataService
        .loadAllComments()
        .then( function( comments ) {
          self.comments = [].concat(comments);
          self.selected = comments[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  // function toggleUsersList() {
  //   $mdSidenav('left').toggle();
  // }
  function toggleCommentsList() {
    $mdSidenav('left').toggle();
  }
  /**
   * Select the current avatars
   * @param menuId
   */
  // function selectUser ( user ) {
  //   self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  // }
  function selectComment ( comment ) {
    self.selected = angular.isNumber(comment) ? $scope.comments[comment] : comment;
  }

  function openCommentModal( ev, comment ) {
    $mdDialog.show({
      templateUrl: 'src/comments/components/form/CommentEdit.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: self.customFullscreen, // Only for -xs, -sm breakpoints.
    });
  }
}

export default [ 'CommentsDataService', '$mdSidenav', '$mdDialog', AppController ];
