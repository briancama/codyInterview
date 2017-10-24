
function CommentsDataService($q, firebase, $firebaseArray) {
  var baseComments = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-1',
      content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    },
    {
      name: 'George Duke',
      avatar: 'svg-2',
      content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
    }
  ];
  const config = {
    apiKey: "AIzaSyAqkuXgHcgvMQcG4Pc2jhSOmBH0SZ2EV9Y",
    authDomain: "codycomments.firebaseapp.com",
    databaseURL: "https://codycomments.firebaseio.com",
    projectId: "codycomments",
    storageBucket: "codycomments.appspot.com",
    messagingSenderId: "17825034949"
  };
  const db = firebase.initializeApp(config).database().ref();
  var comments = $firebaseArray(db);
  // Promise-based API
  return {
    loadAllComments: function() {
      // Simulate async nature of real remote calls
      return $q.when(comments);
    }
  };
}

export default ['$q', 'firebase', '$firebaseArray', CommentsDataService];

