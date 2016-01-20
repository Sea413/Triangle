$(document).ready(function() {
  $("form#rick").submit(function(event) {
    var s1 = parseInt($("input#summer").val());
    var s2 = parseInt($("input#jerry").val());
    var s3 = parseInt($("input#beth").val());
    // var treebeard = parseInt(s1, 10) + parseInt(s2, 10) + parseInt(s3, 10);
      if (s1 === s2 && s1 === s3 && s2 === s3) {
      $('.eqi').show();
      } else {
      $('.PANIC').show();
      }

    event.preventDefault();
  });
});
