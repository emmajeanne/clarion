$(".webTitle").on("mouseover", function(){
  $(".webTitle").text("so many things").addClass("changeHeader");
});
$(".webTitle").on("mouseout", function(){
  $(".webTitle").text("look how many things").removeClass("changeHeader");
});




$(".footerTitle").on("mouseover", function(){
  $(".footerTitle").css("color", "#C1D622")
});

$(".footerTitle").on("mouseout", function(){
  $(".footerTitle").css("color","#FAE8E6" )
});
