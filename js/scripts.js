$(document).ready(function(){
  var num= $('input#input1').val();
  $("form#form1").submit(function(event){
    event.preventDefault();
    if (num=3) {
      $("#ul").append("<li>"+ num +"</li>")
    }

  });
});
