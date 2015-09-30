app.directive('flashCardsNav', function(){
  return {
    scope: {
      onCategoryChanged: '&'
    },
    restrict: 'E',
    templateUrl: '/templates/flash_cards_nav.html',
    link: function($scope, element, attrs){
      $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
      ];

      $scope.setCategory = function(category){
        $scope.onCategoryChanged({cat: category});
        $scope.active = category;
      };
    }
  };
});
