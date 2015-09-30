app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {

  function getFlashCards(category){
    FlashCardsFactory.getFlashCards(category)
      .then(function(flashcards){
        $scope.flashCards = flashcards; 
      });
  }
  getFlashCards();

  $scope.cheat = false;

  $scope.setCategory = function(category){
    getFlashCards(category);
  };

});
