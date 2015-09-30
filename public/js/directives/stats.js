app.directive('stats', function(ScoreFactory){
  return {
    scope: {
    },
    restrict: 'E',
    templateUrl: '/templates/stats.html',
    link: function(scope, element, attributes){
      scope.scores = ScoreFactory;
    }
  };
});
