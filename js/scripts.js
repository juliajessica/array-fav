$(document).ready(function() {
  $("form#fav-things").submit(function() {
    event.preventDefault();
    var food1 = $("#foodinput").val();
    var color1 = $("#colorinput").val();
    var sport1 = $("#sportinput").val();
    //debugger;
    var questionArray = [food1, color1, sport1]
    $("#output").text(questionArray);
//debugger;

    var newArray = questionArray.slice()
    newArray = [sport1, color1, food1]
    // newArrar[2] = [food1]
    // newArray[0] = [sport1]
    $("#output2").text(newArray);

    var arrayThree = [];
    arrayThree.push(color1)
    $("#output3").text(arrayThree);





  });
});
