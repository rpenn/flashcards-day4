app.factory('FlashCardsFactory', function ($http) {
    return { 
      getFlashCards: getFlashCards,
      addNewCard: addNewCard
    };

    function getFlashCards(category){
      var params = {
        category: category
      };
      return $http.get('/cards', {params: params})
                .then(function(results){
                  return results.data;
                });
    }

    function addNewCard(newCard) {
      return $http.post('/cards', newCard)
        .then(function(result){
          return result.config.data;
        });
    }
});

