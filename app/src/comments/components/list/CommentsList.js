export default {
  name : 'commentsList',
  config : {
    bindings         : {  comments: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/comments/components/list/CommentsList.html'
  }
}
