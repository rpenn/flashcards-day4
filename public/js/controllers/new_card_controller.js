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

	$scope.types = [
		{name: 'MongoDB'},
		{name: 'Express'},
		{name: 'Angular'},
		{name: 'Node'}
	];

	$scope.addNewCard = function(card) {
		FlashCardsFactory.addNewCard(card);
			// .then(function(result){
			// });
	}
});