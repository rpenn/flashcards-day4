app.controller('NewCardController', function($scope){
	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
	}

	// $scope.addNewCard = function() {
	// 	$('form').on('submit', function(event){
	// 		event.preventDefault;
	// 		$.ajax('/cards', {
	// 			type: 'POST',
	// 			contentType: 'application/json',
	// 			dataType: 'json',
	// 			data: $('form').serialize(),
	// 			success: function(result) {
	// 				return result;
	// 			}
	// 		});
	// 	})
	// }

	$scope.addNewCard = function() {
			$.ajax('/cards', {
				type: 'POST',
				contentType: 'application/json',
				dataType: 'json',
				data: {
					question: $('#question').val(),
					category: $('#category').val()
				},
				success: function(result) {
					return result;
				}
			});
	}
});