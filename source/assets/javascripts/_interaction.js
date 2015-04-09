$(".extra").click(function() {
  var target = $(this).data("target");
  $("#"+target).toggle("slow");
});
