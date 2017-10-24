// Load the custom app ES6 modules

import CommentsDataService from 'src/comments/services/CommentsDataService';

import CommentsList from 'src/comments/components/list/CommentsList';
import CommentDetails from 'src/comments/components/details/CommentDetails';
import CommentEdit from 'src/comments/components/form/CommentEdit';

// Define the Angular 'comments' module

export default angular
  .module("comments", ['ngMaterial'])

  .component(CommentsList.name, CommentsList.config)
  .component(CommentDetails.name, CommentDetails.config)
  .component(CommentEdit.name, CommentEdit.config)

  .service("CommentsDataService", CommentsDataService);
