app.filter('cheat', function(){
  return function(answers, cheat){
    if(cheat)
      return answers.filter(function(answer){
        return answer.correct;
      });

    return answers;
  }
});
