app.directive('flashCards', function(){
  return {
    scope: {
      flashCards: '=',
      cheat: '='
    },
    restrict: 'E',
    templateUrl: '/templates/flash_cards.html'
  };

});
