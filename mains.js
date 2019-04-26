//on déclare une variable qu'on initialise a 0
var clickCount=0;
//quand le document est chargé
$(document).ready(function(){
  //quand je crée une fonction clic
    $('#clickMe').click(function(){
        clickCount++;
        //donne le resultat du nombre de clic effectuer
        $('#result').attr('value',clickCount);
    });
});
