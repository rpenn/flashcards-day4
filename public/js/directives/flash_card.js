app.directive('flashCard', function(ScoreFactory){
  return {
    scope: {
      flashCard: '=',
      cheat: '='
    },
    restrict: 'E',
    templateUrl: '/templates/flash_card.html',
    link: function($scope, element, attrs){

      $scope.answerQuestion = function (answer, flashCard) {
        if (!flashCard.answered) {
          flashCard.answered = true;
          flashCard.answeredCorrectly = answer.correct;
          if(answer.correct)
            ScoreFactory.correct++;
          else
            ScoreFactory.incorrect++;
        }
      };
    
    }
  };
});
