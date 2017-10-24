
export default {
  name : 'commentDetails',
  config : {
    bindings         : {  selected: '<' },
    templateUrl      : 'src/comments/components/details/CommentDetails.html',
    controller       : [ '$mdBottomSheet', '$log', class CommentDetailsController  {

      /**
       * Constructor
       *
       * @param $mdBottomSheet
       * @param $log
       */
      constructor($mdBottomSheet, $log) {
        this.$mdBottomSheet = $mdBottomSheet;
        this.$log = $log;
      }

      /**
       * Show the bottom sheet
       */
      share() {
        var comment = this.selected;
        var $mdBottomSheet = this.$mdBottomSheet;

        $mdBottomSheet.show({
          parent: angular.element(document. getElementById('content')),
          templateUrl: 'src/comments/components/details/CommentSheet.html',
          controller: [ '$mdBottomSheet', CommentSheetController],
          controllerAs: "$ctrl",
          bindToController : true
        }).then((clickedItem) => {
          this.$log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function CommentSheetController( $mdBottomSheet ) {
          console.log(comment.content);
          this.comment = comment;
          this.performAction = (action) => {
            $mdBottomSheet.hide(action);
          };
        }
      }
    } ]
  }
};


