$("#cube").hide();

$(document).ready(function(){
    $("#del").click(function(){
        $("#box").empty(1000);
    });
    $("#mcube").click(function(){
        $("#cube").show();
      });
    $("#ef").click(function(){
        $("#box").append("<span <b id='f'> Text al final.</b></span>");
    });
    $("#ep").click(function(){
        $("#box").prepend("<span <b id='p'>Text al principi. </b></span>");
    });
    $("#delf").click(function(){
        $("span:last-child").remove();
      });
      $("#delp").click(function(){
        $("span:first-child").remove();;
      });
});