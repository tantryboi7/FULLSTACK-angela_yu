$("h1").addClass("big-title");
$("button").html("<em><strong>hey</strong></em>");
$("a").attr("href","https://in.yahoo.com/");
$("h1").click(function(){
  $("h1").css("color","purple");
});


$("button").click(function(){
  $("h1").css("color","red");
});
$("input").keydown(function(event){
  $("h1").text(event.key);
});
