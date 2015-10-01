app.controller('NewCardController', function($scope, $http, FlashCardsFactory){
	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
	}

	$scope.addNewCard = function(card) {
		console.log(card);
		FlashCardsFactory.addNewCard(card)
			.then(function(result){
			});
	}
});