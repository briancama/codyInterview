export default {
  name : 'commentEdit',
  config : {
    bindings         : {  comments: '<', selected: '<' },
    templateUrl      : 'src/comments/components/form/CommentEdit.html',
    controller       : [ '$mdDialog', class DialogController  {
      constructor($mdDialog, $log) {
        this.$mdDialog = $mdDialog;
        this.$log = $log;
      }
      hide() {
        var $mdDialog = this.$mdDialog;
        $mdDialog.hide();
      }
    } ]
  }
}