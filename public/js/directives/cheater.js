app.directive('cheater', function(){
  return {
    scope: {
      cheat: '='
    },
    restrict: 'E',
    templateUrl: '/templates/cheater.html',
    link: function($scope, elements, attrs){
      $scope.toggleCheat = function(){
        $scope.cheat = !$scope.cheat;
      };
    }
  };
});
