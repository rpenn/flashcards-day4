app.factory('FlashCardsFactory', function ($http) {
    return { 
      getFlashCards: getFlashCards 
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
});
